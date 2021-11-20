/// <reference types="cypress" />
import viewports from '../../../fixtures/viewports.json'

describe('It tests test-run on different viewports', () => {

  Cypress._.each(viewports, viewport => {
    it(`should work on ${viewport} viewport`, () => {
      cy.viewport(viewport)
      cy.visit(Cypress.env('webdriveruni_homepage'))
      viewport === "iphone-x" ?
        cy.get('[data-target="#bs-example-navbar-collapse-1"]').should('be.visible') :
        cy.get('[data-target="#bs-example-navbar-collapse-1"]').should('not.be.visible')
    })
  })

})