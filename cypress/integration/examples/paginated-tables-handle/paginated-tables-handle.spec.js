/// <reference types="cypress" />
chai.use(require("chai-sorted"));
import { recurse } from 'cypress-recurse'

describe('It test table handling with pagination and sorting', () => {

  it('Should be able to sort and switch pages', { viewportHeight: 1080, viewportWidth: 1920 }, () => {
    cy.loginAdminHomePage(Cypress.env('login'), Cypress.env('password'))
    // Confirm row counts
    cy.get('.row').should('have.length', 15)
    // There are multiple pages
    cy.get('.pages-wrap button').should('have.length.gt', 1)
    // Show 120 items per 1 page
    cy.get('.display-wrap button').contains('120').click()
    //The are no more than 2 pages
    cy.wait(500)
    cy.get('.pages-wrap button.item').should('have.length.lt', 3)

    // Back to 30 items
    cy.get('.display-wrap button').contains('30').click()
    cy.wait(500)

    //confirm the points column is NOT sorted
    cy.get('.lists-content > div.client .consult-id')
      .then($cells => Cypress._.map($cells, 'innerText'))
      .then(strings => {
        let filledArray = strings.filter(item => item)
        return filledArray
      })
      .then(filledArray => Cypress._.map(filledArray, parseFloat))
      .should('not.to.be.sorted')

    //sort array and check array is sorted
    cy.get('.list-header .consult-id').click()
  
    recurse(
      () => 
        cy.get('.lists-content > div.client .consult-id')
        .then($cells => Cypress._.map($cells, 'innerText'))
        .then(strings => {
          let filledArray = strings.filter(item => item)
          return filledArray
        })
        .then(filledArray => Cypress._.map(filledArray, parseFloat)),
      (numbers) => 
        expect(numbers).to.be.ascending,
      {
        log: false,
        timeout: 5000, // time limit in ms
        delay: 300 // delay before next iteration, ms
      }
    )
  })

})