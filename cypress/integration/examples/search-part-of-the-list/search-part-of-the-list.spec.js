/// <reference types="cypress" />

describe('It tests finding particular item in the list', () => {

  it('should find item', () => {
    cy.visit('html-templates/static-list-of-items/list.html')
    cy.get('#list li')
      .then($list => {
        const index = Cypress._.findIndex($list, $item => $item.textContent === 'test')
        expect(index).not.to.eql(-1)

        return Cypress._.slice($list, index + 1)
      })
      .should('not.be.empty')
      .contains('work')
      .should('have.id', 'answer')
  })

})