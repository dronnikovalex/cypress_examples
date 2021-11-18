import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Homepage from '../../../support/PageObjects/webdriver-uni/Homepage_PO'

const homepage = new Homepage()

Given('I open home page', () => {
  homepage.visitHomePage()
})

When('I click ContanctUs button', ()  => {
  homepage.clickContactUsPage()
})

And('I fill inputs', (datatable) => {
  datatable.hashes().forEach(cred => {
    cy.get('[name=first_name]').type(cred.firstname)
    cy.get('[name=last_name]').type(cred.lastname)
    cy.get('[name=email]').type(cred.email)
    cy.get('textarea.feedback-input').type(cred.comment)
  })
})

And('I click submit button', () => {
  cy.get('input[type="submit"]').click()
})

Then('I see successfully form submission message', () => {
  cy.get('h1').should('contain', 'Thank You for your Message!')
})


