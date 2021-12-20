import { gql } from '@apollo/client'
import { client } from '../../../todo-graphql/src/graphql-client'

describe('It tests get todo item by using app\'s client ', () => {

  it('Should create todo and get it', () => {
    const number = Cypress._.random(1e5)
    const title = `This is title ${number}`

    cy.visit('/')

    cy.request({
      method: 'POST',
      url: Cypress.env('gqlHost'),
      body: {
        operationName: "AddTodo",
        query: `
          mutation AddTodo($title: String!) {
            createTodo(title: $title, completed: false) {
              id
            }
          }
        `,
        variables: { title }
      }
    })
      .its('body.data.createTodo')
      .should('have.property', 'id')
      .then(id => {
        const query = gql `
          query getTodo ($id: ID!) {
            Todo(id: $id) {
              id
              title
              completed
            }
          }
        
        `
        //its async call so we need to wrap it
        cy.wrap(client.query({query, variables: { id }}))
          .its('data.Todo')
          .should('deep.include', {
            id,
            completed: false,
            title
          })
      })

  })

})