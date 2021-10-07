/// <reference types="cypress" />

describe('Iterating over elements', () => {

  before(function () {
    cy.fixture('products').then(products => this.products = products)
  })

  beforeEach(() => {
    cy.visit('https://automationteststore.com/')
    cy.get('a[href*="product/category"]').contains('Hair Care').click()
  })

  it('Add items to basket', function () {

    this.products.productsNames.forEach(item => {
      cy.addMultipleItems(item)
    })

  })



})