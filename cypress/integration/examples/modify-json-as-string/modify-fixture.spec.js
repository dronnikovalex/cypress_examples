/// <reference types="cypress" />

describe('It tests fixture modifying by converting to a string', () => {
  it('should modify data', () => {
    cy.fixture('textToModify')
      .then(JSON.stringify) // convert it into a string
      .invoke('replace', 'Alex', 'Petr') // use invoke to call replace function
      .invoke('replace', 'Igor', 'Test')
      .invoke('toLowerCase') // use invoke method to transorm users name to lowercase
      .then(JSON.parse) // convert string into an object
      .then(users => {
        users.forEach(user => {
          expect(user).to.contain.key('name') 
        });
      })
  })
})