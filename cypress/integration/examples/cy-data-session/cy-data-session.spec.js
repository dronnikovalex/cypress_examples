/// <reference types="cypress-data-session"/>
import data from '../../../fixtures/contacts.json'
import { deleteContacts, createContacts, getcontacts } from '../utils.js'


describe('It tests cy-data-session-plugin', () => {

  beforeEach(() => {
    cy.dataSession({
      //session name
      name: '4 contacts',
      //thist function runs before setup
      preSetup() {
        cy.log('**delete-all-contacts**')
        deleteContacts()
      },
      setup() {
        cy.log('**create-all-contacts**')
        createContacts(data.contacts)
        cy.wrap(Cypress._.map(data.contacts, 'name'))
      },
      //this function will validate setup() function and if it no longer valid will re-create session
      validate(titles) {
        getcontacts()
          .then(contacts => {
            return Cypress._.isEqual(titles, Cypress._.map(contacts, 'name'))
          })
      }
    })
  })
  
  it('Should use data-session', () => {
    cy.visit('http://localhost:3000')
    cy.get('.card-body').should('have.length', data.contacts.length)
  })

  it('Should clear session', () => {
    cy.visit('http://localhost:3000')
    cy.get('.card-body').should('have.length', data.contacts.length)
    .then(() => {
      //clear session manually if data has been change 
      Cypress.clearDataSession('4 contacts')
    })
    
  })

})