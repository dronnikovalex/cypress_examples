/// <reference types="cypress" />

describe('Handling alerts', () => {

  it('Handling alerts', () => {

    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
    cy.get('#button1').click()

    cy.on('window:alert', $text => {
        expect($text).to.eql('I am an alert box!')
      }
    )
  })

  it('Handling confirm window pressed value OK', () => {

    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
    cy.get('#button4').click()

    cy.on('window:confirm', str => {})
    cy.get('#confirm-alert-text').contains('You pressed OK!')
    
  })

  it('Handling confirm window pressed value CANCEL', () => {

    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
    cy.get('#button4').click()

    cy.on('window:confirm', str => false)
    cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    
  })

})