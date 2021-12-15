/// <reference types="Cypress" />

describe('It will wait for third party js', () => {

  it('should slowdown req and open chat', { viewportHeight: 1080, viewportWidth: 1920 }, () => {
    cy.intercept('https://code.tidio.co/*.js', () => Cypress.Promise.delay(3000)).as('tidio')

    cy.visit('html-templates/tidio-chat-demo/index.html')
    cy.wait('@tidio')
    //waiting by built in assertion useing cy.window to get tidichat obj and invoke open method on it
    cy.window().its('tidioChatApi').invoke('open')
    // cy.get('#open-chat').click()
  })

  it.only('should spy on tidiochat open method', () => {

    cy.visit('html-templates/tidio-chat-demo/index.html')
    // get the windows.tidioChatApi obj
    cy.window().its('tidioChatApi')
      .then(tidio => {
        //use spy on tidio.open() method and save it into alias
        cy.spy(tidio, 'open').as('open')
      })
    cy.get('#open-chat').click()
    //get spy and assert that's has been called once
    cy.get('@open').should('be.calledOnceWithExactly')

  })

})