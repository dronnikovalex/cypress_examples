describe('It tests spying on graphql request', () => {

  it('Should spy and verify on gql calls', () => {

    //gql client should be defined in a window property in graphql-client.js
    cy.visit('/')
      .should('have.property', 'graphqlClient')
      .then(client => {
        //spying on client object function mutate
        cy.spy(client, 'mutate').as('mutation')
        cy.get('.new-todo').type('New item{enter}')
        cy.get('@mutation')
          .should('be.calledOnce')
          .its('firstCall.args.0.variables')
          .should('deep.include', {
            title: 'New item'
          })
          .and('have.property', 'id')
      })

  })

})