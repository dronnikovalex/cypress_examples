/// <reference types="cypress" />

describe('Verify radio buttons', () => {

  beforeEach(() => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
  })

  it('Check radio buttons', () => {
    cy.get('#radio-buttons').find('input[type=radio]').as('radioButtons')
    cy.get('@radioButtons').each($radio => {
      cy.wrap($radio).check().should('be.checked')
    })
  })

  it('Check states of radiobuttons', () => {
    cy.get('#radio-buttons-selected-disabled').within(() => {
      cy.get('[value="lettuce"]').should('not.be.checked')
      cy.get('[value="cabbage"]').should('be.disabled')
      cy.get('[value="pumpkin"]').should('be.checked')
    })
  })

})