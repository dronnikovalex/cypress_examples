/// <reference types="cypress" />

const { io } = require("socket.io-client");

describe('It test socket connection', { viewportHeight: 1080, viewportWidth: 1920 }, () => {

  it('should verify that clients exist', () => {
    let chat
    
    cy.clock()
    cy.visit('localhost:3000')
    //stub alert to revify that is was called
    cy.window().then(w => {
      cy.stub(w, 'alert').as('alert')
    })

    cy.get('.usernameInput').type('testUser{enter}')
    cy.wait(500)

    cy.get('@alert').should('have.been.calledOnceWith', 'new')

    cy.tick(1000)
    cy.wait(500)
      .then(() => {

        (async function() {

          chat = await io.connect('http://localhost:3000', {
            path: '/socket.io',
            transports: ['websocket']
          })

          await chat.emit('add user', 'Cypress')
          await chat.emit('typing')
          await chat.emit('new message', 'From cypress')
          await chat.emit('stop typing')
          
        })()
      })
      .then(() => {
        cy.contains('.username', 'Cypress').should('be.visible')
        cy.get('.messageBody').should('contain', 'From cypress')
      })
      .then(() => chat.disconnect())
      .then(() => cy.get('@alert').should('have.been.calledWith', 'left'))
  })

})