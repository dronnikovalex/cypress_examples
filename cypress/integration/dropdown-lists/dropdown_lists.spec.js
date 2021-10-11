/// <reference types="cypress" />

describe('Handling drodpown lists', () => {

  it('Selecting drodown items by using values attr', () => {
    cy.visit('/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    cy.get('#dropdowm-menu-1').select('c#').should('have.value', 'c#')
    cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
    cy.get('#dropdowm-menu-3').select('javascript').should('have.value', 'javascript')
  })

  it('Selecting drodown items by using text values', () => {
    cy.visit('/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    cy.get('#dropdowm-menu-1').select('Python').should('have.value', 'python')
    cy.get('#dropdowm-menu-2').select('JUnit').should('have.value', 'junit')
    cy.get('#dropdowm-menu-3').select('CSS').should('have.value', 'css')
  })

  it('Dropdown lists challenge', () => {
    cy.visit('/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
    cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')
  })

})