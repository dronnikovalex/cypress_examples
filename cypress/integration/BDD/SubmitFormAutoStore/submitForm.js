/// <reference types="cypress" />
import { Given, When, Then, And, AfterFeatures } from "cypress-cucumber-preprocessor/steps";

AfterFeatures('a', ()=>{
  cy.log('AfterFeatures')
})

Given('I open home page', () => {
  cy.visit(Cypress.env('automationstore_homepage'))
})

When('I click on ContactUs button', () => {
  cy.get('.info_links_footer a[href$="/contact"]').click()
})

And('I fill inputs with correct data', datatable => {
  let arr = []
  let [fn, email, enquiry] = arr.concat(...datatable.rawTable.slice(1))
  cy.get('#ContactUsFrm_first_name').type(fn)
  cy.get('#ContactUsFrm_email').type(email)
  cy.get('#ContactUsFrm_enquiry').type(enquiry)
})

And('I submit the form', () => {
  cy.get('button[title="Submit"]').click()
})

Then('I see success message {string}', str => {
  cy.get('.contentpanel p').should('contain', str)
})