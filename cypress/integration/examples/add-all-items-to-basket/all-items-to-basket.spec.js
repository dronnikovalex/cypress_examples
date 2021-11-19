/// <reference types="cypress" />

describe('It tests adding all items in basket from homepage', () => {

  it('should be able to add all items to basket', () => {

    cy.visit(Cypress.env('automationstore_homepage'))
    let countItems = 0
    cy.get('.thumbnail a.productcart').each($product => {
      if ($product.attr('href') !== '#') {
        $product.attr('href', '#')
      }
      cy.wrap($product).click()
      countItems++
    })
    .then(() => {
      cy.get('.topcart span.label-orange').invoke('text').then(totaCount => {
        expect(+totaCount).to.eql(countItems)
      })
    })

  })

})