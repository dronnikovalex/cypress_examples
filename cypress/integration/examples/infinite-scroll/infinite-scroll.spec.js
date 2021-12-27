/// <reference types="cypress" />

describe('It tests infinite scroll', () => {

  it('fetches item on scroll', () => {
    cy.visit('html-templates/infinite-scroll/index.html')
    cy.get('.loader').should('be.visible')
    cy.get('.loader').should('not.be.visible')

    cy.scrollTo('bottom')
    cy.get('.loader').should('be.visible')
    cy.get('.loader').should('not.be.visible')

    cy.scrollTo('bottom')
    cy.get('.loader').should('be.visible')
    cy.get('.loader').should('not.be.visible')

    //and so on...
  })

  it('fetches N items at a time', () => {
    cy.visit('html-templates/infinite-scroll/index.html')
    cy.get('.quote').should('have.length.greaterThan', 5)
      .then(quotes => {
        //scroll list of items and verify its length after it
        cy.scrollTo('bottom')
        cy.get('.quote').should('have.length', quotes.length * 2)

        //scroll list of items one more time and verify its length after it
        cy.scrollTo('bottom')
        cy.get('.quote').should('have.length', quotes.length * 3)

        //and so on...
      })
  })

  it('fetches quotes from API', () => {
    cy.intercept('GET', '**/v1/quotes/*').as('quotes')

    cy.visit('html-templates/infinite-scroll/index.html')
    cy.wait('@quotes')
    cy.scrollTo('bottom')
    cy.get('.quote').should('have.length.greaterThan', 10)

    cy.wait('@quotes')
    cy.scrollTo('bottom')
    cy.get('.quote').should('have.length.greaterThan', 20)

    cy.wait('@quotes')
    cy.scrollTo('bottom')
    cy.get('.quote').should('have.length.greaterThan', 30)

    //and so on...
  })

  it.only('to the top', () => {
    cy.visit('html-templates/infinite-scroll/index.html')
    //Y scroll should be eql to 0 right after visiting the page
    cy.window().its('scrollY').should('eq', 0)

    cy.scrollTo('bottom')
    cy.get('.quote').should('have.length.greaterThan', 10)
    //after scrolling it can't be eql to 0 anymore
    cy.window().its('scrollY').should('be.gte', 100)

    cy.scrollTo('bottom')
    cy.get('.quote').should('have.length.greaterThan', 10)
    //after scrolling it can't be eql to 0 anymore
    cy.window().its('scrollY').should('be.gte', 1000)

    //back to the top and assert on Y coordinate
    cy.get('#back-to-top').click()
    cy.window().its('scrollY').should('eq', 0)
  })

})