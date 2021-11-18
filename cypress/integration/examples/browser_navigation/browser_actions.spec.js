/// <reference types="cypress" />

describe('It testing browser navgiation', () => {
  
  it('Moving back/forward', () => {

    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#contact-us').invoke('removeAttr', 'target').click()

    cy.go('back')
    cy.go('forward')
    cy.url().should('include', 'contactus')
    cy.reload()
    cy.go('back')

    cy.get('#to-do-list').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'To-Do-List')
    cy.go('back')
    cy.url().should('eql', 'http://www.webdriveruniversity.com/')

  })  

})