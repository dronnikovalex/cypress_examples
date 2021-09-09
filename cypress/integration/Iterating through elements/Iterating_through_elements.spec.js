/// <reference types="cypress" />

describe('Iterating over elements', () => {

  it('Getting all hair care elements', () => {

    cy.visit('https://automationteststore.com/')
    cy.get('a[href*="product/category"]').contains('Hair Care').click()
    cy.url().should('include', 'path=52')
    cy.get('.fixed_wrapper .prdocutname').each(($el,index) => {
      cy.log(`This is ${index} ${$el.text()}`)
    })
  })

  it.only('Getting specific product', () => {

    cy.visit('https://automationteststore.com/')
    cy.get('a[href*="product/category"]').contains('Hair Care').click()
    cy.url().should('include', 'path=52')

    cy.get('.fixed_wrapper .prdocutname').each(($el,index) => {
      if($el.text().includes('Seaweed Conditioner')) {
        cy.wrap($el).click()
      }
      cy.get('h1.productname').contains('Seaweed Conditioner')
    })

  })

})