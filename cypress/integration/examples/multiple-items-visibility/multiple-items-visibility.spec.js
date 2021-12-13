/// <reference types="cypress" />

describe('Assert on multiple items visibility', () => {

  it('should correct assert on multiple items visibility', () => {
    cy.visit('html-templates/multiple-items-list/index.html')

    cy.log('**using standart approach**')
    cy.get('#few-elements li').should('be.visible').and('have.length', 3)

    //using jQuery ":visibile" to select only visible variants
    cy.log('**using jQuery modifier**')
    cy.get('#few-elements li:visible').should('be.visible').and('have.length', 2)

    //using filter() method
    cy.log('**using filter() method**')
    cy.get('#few-elements li')
      .should('have.length', 3)
      .filter(':visible')
      .should('have.length', 2)

    cy.log('**using filter() method to get invisible items**')

    cy.get('#few-elements li')
      .should('have.length', 3)
      .not(':visible')
      .should('have.length', 1)

    //more complicated scenario to get all items and assert on it length

    cy.get('#few-elements li')
      .then($all => {
        const allN = $all.length
        cy.wrap($all)
          .filter(':visible')
          .its('length')
          .then(visible => {
            cy.wrap($all)
              .not(':visible')
              .its('length')
              .then(notVisible => {
                expect(allN, 'total items').to.eql(visible + notVisible)
              })
          })
      })

  })

})