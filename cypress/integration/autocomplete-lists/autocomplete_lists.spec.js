/// <reference types="cypress" />

describe('It testing browser navgiation', () => {

  it('Moving back/forward', () => {

    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click()
    cy.get('#myInput').type('A')
    
  })

})