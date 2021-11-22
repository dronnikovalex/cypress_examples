/// <reference types="cypress" />

describe('It tests invoke methods on a yielded subjects', () => {
  
  it('Should invoke "replace" method on a string', () => {
    //Invoke "replace" method to delete all non digit symbols in a string
    cy.wrap('#23#').invoke('replace', /[\D]/g, '')
      .then(str => cy.log(str))
  })

})