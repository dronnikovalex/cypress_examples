describe('It tests same origin policy', () => {

  it('Visting 2 url in different superdomains', () => {

    cy.visit('http://www.webdriveruniversity.com/')
    cy.visit('http://www.google.com/') //will error

  })

  it.only('Visting 2 url in different superdomains by clicking button', () => {

    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#automation-test-store').invoke('removeAttr', 'target').click()

  })

})