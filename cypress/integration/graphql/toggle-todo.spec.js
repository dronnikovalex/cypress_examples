describe('It test toggle todos', () => {

  it('should toggles todo', () => {
    cy.intercept('POST', '/').as('allToDos')
    cy.visit('/')
    cy.wait('@allToDos').its('response.body.data.allTodos.0.completed')
      .then(completed => {
        const classAssertion = completed ? 'have.class' : 'not.have.class'

        cy.get('.todo').should('have.length', 2)
          .first().should(classAssertion, 'completed')
          .find('.toggle')
          .click()
      })
  })

})