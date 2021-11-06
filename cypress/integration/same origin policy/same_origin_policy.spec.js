describe('It tests same origin policy', () => {

  it('Visting 2 url in different superdomains', () => {

    //will error cause only one superdomain can be visited in a single test
    // cy.visit('http://www.webdriveruniversity.com/')
    // cy.visit('http://www.google.com/') 
    
  })

  it('Visting 2 url in different superdomains by clicking button', () => {
    //it will pass only if add {chromeWebSecurity: false} option in cypress.json
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#automation-test-store').invoke('removeAttr', 'target').click()

  })

})