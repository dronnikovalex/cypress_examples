describe('It tests stubbing initial data', () => {

  it('should stub data by cy.intercept', () => {
    // stubbing response by using staticResponse in fixture
    cy.intercept({
      method: 'POST',
      url: '/',
    }, { fixture: 'three-todos' }).as('Todos')

    cy.visit('/')
    cy.get('.todo').should('have.length', 3)
    cy.get('.todo').not('.completed').should('have.length', 2)
  })

})