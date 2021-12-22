import { gql } from '@apollo/client'
import { client } from '../../../todo-graphql/src/graphql-client'

describe('It tests delete all items', () => {
  //utility function to delete all todos
  function removeItems() {
    cy.log('**removeItems**')
      .then(() =>
        client.query({
          query: gql `
            query getAllTodos {
              allTodos {
                id
              }
            }
          `,
          //avoid caching
          fetchPolicy: 'no-cache'
        })
      )
      .its('data.allTodos')
      .should('be.an', 'array')
      .then(todos => Cypress._.map(todos, 'id'))
      .then(ids => {
        if (!ids.length) {
          cy.log('No todos to delete')
          return
        }

        ids.forEach(id => {
          //create query for delete by id
          const mutation = gql `
            mutation deleteTodo {
              removeTodo(id: "${id}") {
                id
              }
            }
            `
          cy.log(`**delteting id:${id}**`)
            .then(() => {
              client.mutate({
                mutation
              })
            })
        })
      })
  }

  beforeEach(removeItems)

  it('Should delete items', () => {

    cy.visit('/').wait(1000)
    cy.get('.todo').should('have.length', 0)
  })

})