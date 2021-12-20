describe('It tests adding todo', () => {

  it('should add todo in the list', () => {
    //intercept all calls and alias each of them using "operationName" key in req obj
    cy.intercept('POST', '/', (req) => {
      console.log(req)
      req.alias = req.body.operationName
    })
    cy.visit('/')
    cy.wait('@allTodos').its('response.body.data.allTodos.length').as('oldLength') // wait for fetch todos
    cy.get('.new-todo').type('Learn ES6{enter}')
    cy.wait('@AddTodo').its('request.body.variables').should('deep.equal', { title: 'Learn ES6' }) // wait for adding new todo
    cy.wait('@allTodos') // again wait for update list of todos
      .then(function () {
        cy.get('@allTodos').its('response.body.data.allTodos.length').should('eql', this.oldLength + 1) // verify that length on the list is greater by one
      })
  })

  it.only('Should add todo in the list and intercept calls', () => {
    //intercept all calls using routerMatcher by giving custom header. So app can exactly reflect intercepts
    cy.intercept({
      method: 'POST',
      url: '/',
      headers: { 'x-gql-operation-name': 'allTodos' }
    }).as('allTodos')

    cy.intercept({
      method: 'POST',
      url: '/',
      headers: { 'x-gql-operation-name': 'AddTodo' }
    }).as('AddTodo')

    cy.visit('/')
    cy.wait('@allTodos').its('response.body.data.allTodos.length').as('oldLength') // wait for fetch todos
    cy.get('.new-todo').type('Learn ES6{enter}')
    cy.wait('@AddTodo').its('request.body.variables').should('deep.equal', { title: 'Learn ES6' }) // wait for adding new todo
    cy.wait('@allTodos') // again wait for update list of todos
      .then(function () {
        cy.get('@allTodos').its('response.body.data.allTodos.length').should('eql', this.oldLength + 1) // verify that length on the list is greater by one
      })
  })

})