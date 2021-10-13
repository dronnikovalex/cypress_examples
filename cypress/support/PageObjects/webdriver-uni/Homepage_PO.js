/// <reference types="cypress" />

class Homepage {
  visitHomePage () {
    cy.visit(Cypress.env('webdriveruni_homepage'))
  }
  
  clickContactUsPage() {
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
  }
}

export default Homepage