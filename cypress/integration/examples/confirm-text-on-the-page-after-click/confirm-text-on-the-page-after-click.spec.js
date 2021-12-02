/// <reference types="cypress" />

describe('It tests confirm text changes on the page after click on element', () => [

  it('should verify text changes', () => {
    cy.visit('html-templates/text-changes-on-the-page/index.html')

    cy.get('#output').invoke('text').then(text => {
      cy.get('#click_button').click()
      
      // get one text propery one more time, and assert that's not eql to original text
      cy.get('#output').invoke('text').should('not.eql', text)

    })
  })

])