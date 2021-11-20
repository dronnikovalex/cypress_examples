/// <reference types="cypress" />

describe('It test access to window and document object', () => {

  it('Should get access to document obj', () => {
    cy.visit('/')
    cy.document().then(w => {
      cy.log(w.body.innerHTML = "Hello from cypress")
    })
  })

  it('Should get access to window obj and assert current viewport width and height', { viewportWidth: 1920, viewportHeight: 1080 }, () => {
    cy.visit('/')
    cy.window().then(w => {
      expect(w.innerHeight).to.eql(1080)
      expect(w.innerWidth).to.eql(1920)
    })
  })

})