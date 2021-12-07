/// <reference types="cypress"/>

const baseUrl = 'http://localhost:3000'

export function getcontacts() {
  cy.log('**get-all-contacts**')
  return cy.request(`${baseUrl}/api/contacts`).its('body')
}

export function deleteContacts() {
  getcontacts()
    .then(contacts => {
      let ids = (Cypress._.map(contacts, 'id'))
      ids.forEach(id => {
        cy.request('DELETE', `${baseUrl}/api/contacts/${id}`)
      });
    })
    .then(() => cy.log('**all-contacts-deleted**'))
}

export function createContacts(contacts) {
  contacts.forEach(contact => {
    cy.request('POST', `${baseUrl}/api/contacts/`, contact)
  })
  cy.log('**all-contacts-has-been-created**')
}