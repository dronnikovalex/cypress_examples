/// <reference types="cypress" />
import 'cypress-network-idle'

describe('It should tests network idle plugin', { baseUrl : 'http://localhost:3000' },  () => {

  beforeEach(() => {
    cy.intercept('GEt', 'api/contacts*', { fixture: 'contactsStub.json' }).as('contacts')
  })

  it('should wait for network request', () => {

    const delay = 1500
    cy.visit(`/?delay=${delay}`)
    
    //There is a problem. Test runner anaware that is application is still fetching data becuase of delay
    cy.waitForNetworkIdle(2000)
    cy.get('[data-cy="card_title"]').should('have.length', 0)

  })

  it.only('should not kick off request by using cy.wait', () => {
    //callCount will fail becuase becase wait() kicks off request and there should be 
    cy.waitForNetworkIdlePrepare({
      method: 'GET',
      pattern: 'api/contacts*',
      alias: 'load'
    })
    //now it will work case we're starts intercept before visiting
    cy.visit(`/`).wait(10)
    
    cy.waitForNetworkIdle('@load', 1000)
      .its('callCount')
      .should('eql', 1)
    cy.get('[data-cy="card_title"]').should('have.length', 1)

  })

})