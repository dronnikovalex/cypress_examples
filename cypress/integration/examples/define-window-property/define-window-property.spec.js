/// <reference types="cypress" />

describe('It define window property to simplify access aliased items', () => {

  it('should define window property', () => {

    cy.visit('html-templates/list-with-pages/index.html')

    cy.contains('button[role=tab]', 'Page 2').as('page2')
    cy.contains('button[role=tab]', 'Page 3').as('page3')

    // Define window object for getting access to second and third page below
    Object.defineProperties(window, {
      second: {
         get() {
          return cy.get('@page2')
        }
      },
      third: {
        get() {
          return cy.get('@page3')
        }
      }
    })

    second.click().should('have.attr', 'aria-selected', 'true')
    third.should('not.have.attr', 'aria-selected', 'true')
    
    third.click().should('have.attr', 'aria-selected', 'true')
    second.should('not.have.attr', 'aria-selected', 'true')

  })
  
})