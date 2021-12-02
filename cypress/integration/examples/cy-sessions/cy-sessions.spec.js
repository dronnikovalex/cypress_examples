/// <reference types="cypress" />

describe('It test cy.sessions command', { viewportHeight: 1080, viewportWidth: 1920 }, () => {

  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('/')
      cy.get('#login').type(Cypress.env('login'))
      cy.get('#password').type(Cypress.env('password'))
      cy.get('.btn-login').click()
        .then(() => {
          cy.get('.inputs-wrap input').each($input => {
            cy.wrap($input).type(9)
          })
        })
      cy.wait(1000)
    })
  })

  it('should verify that clients exist', () => {
    cy.visit('/')
    cy.get('.client').should('exist')
  })

  it('should verify that consultants exist', () => {
    cy.visit('/')
    cy.contains('.link-text', 'Консультанты').click()
    cy.get('.consultants').should('exist')
  })

})