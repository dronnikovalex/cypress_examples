/// <reference types="cypress" />
import 'cypress-network-idle'

describe('It should tests network idle plugin', { baseUrl : 'http://localhost:3000' },  () => {

  // beforeEach(() => {
  //   cy.intercept('GEt', 'api/contacts*', { fixture: 'contactsStub.json' }).as('contacts')
  // })

  it('should wait for network request', () => {

    const delay = 1500
    cy.visit(`/?delay=${delay}`)
    //There is a problem. Test runner anaware that is application is still fetching data becuase of delay
    cy.waitForNetworkIdle(2000)
    cy.get('[data-cy="card_title"]').should('have.length', 0)

  })

})