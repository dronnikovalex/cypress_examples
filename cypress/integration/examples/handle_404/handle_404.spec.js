describe('It should test handling 404 err on the web page', () => {

  it('shows 404 error', { baseUrl: 'http://localhost:3000/'} ,() => {
    cy.request({
      url: '/base', 
      failOnStatusCode: false 
    })
      .its('status')
      .should('eq', 404)
    cy.visit('/base', { failOnStatusCode: false }) //to avoid error on 404, should be added failOnStatusCode
    cy.contains('span', '404').should('be.visible') 

  })

})