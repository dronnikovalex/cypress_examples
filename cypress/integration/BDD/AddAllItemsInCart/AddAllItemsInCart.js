import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open home page', () => {
  cy.visit(Cypress.env('automationstore_homepage'))
})

When('I add each product on page in cart', () => {
  let countItems = 0
  cy.get('.thumbnail a.productcart').each($product => {
    if ($product.attr('href') !== '#') {
      $product.attr('href', '#')
    }
    cy.wrap($product).click()
    countItems++
  })
  .then(() => cy.wrap(countItems).as('countItems'))
  
  // cy.wrap(countItems).as('countItems')
})

Then('I see correct count of items in the cart', function() {
  cy.get('.topcart span.label-orange').invoke('text').then(totaCount => {
    expect(+totaCount).to.eql(this.countItems)
  })
})

// Second scenario
// ==============================================

When('I click on prefered brand', () => {
  cy.get('#popularbrands a >img[alt="Benefit"]').click()
})


Then('I see page filtered by prefered brand', () => {
  cy.title().should('eql', 'Benefit')
})