// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addMultipleItems', productName => {
  cy.get('.fixed_wrapper .prdocutname').each(($el, index) => {
    if($el.text() === productName) {
      cy.get('.productcart').eq(index).click()
    }
  })
})

Cypress.on('uncaught:exception', (err, runnable) => {

  if (err.message.includes('Unexpected token \'<\'') || err.message.includes('$ is not defined') ) {
    return false
  }

})

Cypress.Commands.add('loginAdminHomePage', (login, password) => {
  cy.visit('/')
  
  cy.get('#login').type(login)
  cy.get('#password').type(password)
  cy.get('.btn-login').click()
  .then(() => {
    cy.get('.inputs-wrap input').each($input => {
      cy.wrap($input).type(9)
    })
  })
})