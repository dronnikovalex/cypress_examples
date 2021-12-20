describe('It tests adding new todo by using graphql request', () => {

  it('Should create todo', () => {
    const number = Cypress._.random(1e5)
    const title = `This is title ${number}`

    cy.visit('/').wait(1000) //now cy.request will start after fetching all todos and new todo won't be shown

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

    //verify that item is not visibile
    cy.contains(title).should('not.exist')
  
    cy.reload() //page can be realoded

    //verify that item is visibile after reloading the page
    cy.contains('.todo', title)

  })

})