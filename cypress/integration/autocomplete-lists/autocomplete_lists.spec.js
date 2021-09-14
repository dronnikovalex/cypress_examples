/// <reference types="cypress" />

describe('It testing browser navgiation', () => {

  it('Moving back/forward', () => {

    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click()
    cy.get('#myInput').type('A')

    cy.get('#myInputautocomplete-list > *').each($el => {

      let item = $el.text()
      let wantedItem = 'Avacado'

      if (item == wantedItem) {
        cy.wrap($el).click()
        cy.get('#submit-button').click()
        cy.url().should('include', wantedItem)
      }
    })
      .then(() => {

        cy.get('#myInput').type('G')

        cy.get('#myInputautocomplete-list > *').each($el => {

          let item = $el.text()
          let wantedItem = 'Grapes'

          if (item == wantedItem) {
            cy.wrap($el).click()
            cy.get('#submit-button').click()
            cy.url().should('include', wantedItem)
          }
        })

      })
  })

})