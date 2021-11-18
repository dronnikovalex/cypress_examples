/// <reference types="cypress" />

describe('Handling checkboxes', () => {

  beforeEach(() => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
  })

  it('Verify checking checkbox', () => {

    cy.get('#checkboxes > :nth-child(1) > input').as('option-1')

    cy.get('@option-1').check().should('be.checked')

  })

  it('Verify unchecking checkbox', () => {

    cy.get('#checkboxes > :nth-child(5) > input').as('option-3')

    cy.get('@option-3').uncheck().should('not.be.checked')

  })

  it('Check multiple checkbox', () => {

    cy.get('input[type=checkbox]').as('checkboxes')

    cy.get('@checkboxes').check(['option-1', 'option-2', 'option-3', 'option-4']).should('be.checked')

  })

})
