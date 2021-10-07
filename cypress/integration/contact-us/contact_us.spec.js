/// <reference types="cypress" />

describe('Handling fixtures', () => {

  before(function() {
    cy.fixture('credentials').then(cred => this.cred = cred)
  })

  beforeEach(() => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
  })

  it('Using fixture to fill inputs', function() {

    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.title().should('include', 'WebDriver | Contact Us')
    cy.get('[name=first_name]').type(this.cred.firstName)
    cy.get('[name=last_name]').type(this.cred.lastName)
    cy.get('[name=email]').type(this.cred.email)
    cy.get('[type=reset]').click()
  })

})
