/// <reference types="cypress"/>
import { highlight } from 'cypress-highlight'

describe('It tests highlight plugin', () => {

  it('should highlight data-cy attr', () => {
    cy.visit('http://localhost:3000/')
    highlight('.card-body', '[data-cy]') //It possible to highlight list of given selectors
    cy.contains('h1', 'REST API').should('be.visible')
  })

})