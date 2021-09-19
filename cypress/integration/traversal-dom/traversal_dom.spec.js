/// <reference types="cypress" />

describe('Verify radio buttons', () => {

  beforeEach(() => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#data-table').invoke('removeAttr', 'target').click()
  })

  it('get the children elems', () => {
    cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Contact Us')
  })

  it('get the closest item', () => {
    cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group')
  })

  it('eq() command returns specified item', () => {
    cy.get('.traversal-drinks-list > *').eq(2).should('contain', 'Milk')
  })

  it('filter() command returns specific elements by given selector', () => {
    cy.get('.btn-group-toggle > *').filter('.active').should('contain', 'Button-1')
  })

  it('find() command gets specific elements by given selector', () => {
    cy.get('.traversal-pagination').find('a').should('have.length', 7)
  })

  it('first() command gets first element from a list of elements', () => {
    cy.get('#t01 > tbody > tr > td').first().should('contain', 'John')
  })

  it('last() command gets last element from a list of elements', () => {
    cy.get('#t01 > tbody > tr > td').last().should('contain', '20')
  })

  it('nextAll() command all other elements after founded', () => {
    cy.get('.traversal-drinks-list').find('#milk').nextAll().should('have.length', 2)
  })

  it('not() command exclude elements from list', () => {
    cy.get('.traversal-button-states > button').not('.disabled').should('not.have.class', 'disabled')
  })

  it('parent() command getting parents item', () => {
    cy.get('.traversal-mark').parent().should('contain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit')
  })

  it('parents() command getting parents items', () => {
    cy.get('.traversal-cite').parents().should('match', 'blockquote')
  })

  it('prev() gets previous item', () => {
    cy.get('#sugar').prev().should('contain', 'Espresso')
  })

  it('prevAll() gets all previous items', () => {
    cy.get('.sales').prevAll().should('have.length', 2)
  })

  it('prevUntil()', () => {
    cy.get('#veggie').prevUntil('#fruits').should('have.length', 5)
  })

  it.only('sibling() command gets all sibling items', () => {
    cy.get('.btn-primary.active').siblings().should('have.length', 3)
  })
})