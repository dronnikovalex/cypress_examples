/// <reference types="cypress" />
import Homepage from '../../support/PageObjects/webdriver-uni/Homepage_PO'
import ContactUs from '../../support/PageObjects/webdriver-uni/ContactUs_PO'

describe('Handling fixtures', () => {
  const homepage = new Homepage()
  const contact = new ContactUs()

  before(function() {
    cy.fixture('credentials').then(cred => this.cred = cred)
  })

  beforeEach(() => {
    homepage.visitHomePage()
    homepage.clickContactUsPage()
  })

  it('Using fixture to fill inputs', function() {

    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.title().should('include', 'WebDriver | Contact Us')
    contact.formSubmission(this.cred.firstName, this.cred.lastName, this.cred.email, "Sample text", "h1", "Thank You for your Message!")

  })

  it('Getting error page if email is empty', function() {

    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.title().should('include', 'WebDriver | Contact Us')
    contact.formSubmission(this.cred.firstName, this.cred.lastName, " ", "Sample text", "body", "Error: Invalid email address")

  })

})
