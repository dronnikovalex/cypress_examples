/// <reference types="cypress" />

describe('Iterating over elements', () => {

  it('Validate specific product', () => {

    cy.visit('https://automationteststore.com/')
    cy.get('a[href*="product/category"]').contains('Hair Care').click()

    cy.get('.fixed_wrapper .prdocutname').first().invoke('text').as('product')
    cy.get('@product').its('length').should('be.greaterThan', 5)
    cy.get('@product').should('be.eql', 'Seaweed Conditioner')

  })

  it('Validate products amount and add-to-cart title', () => {

    cy.visit('https://automationteststore.com/')
    cy.get('.thumbnail').as('product')
    cy.get('@product').its('length').should('be.eql', 16)
    cy.get('@product').find('.productcart').first().invoke('attr', 'title').should('be.eql', 'Add to Cart')

  })

  it.only('Calculate total of normal and sale products', () => {

    cy.visit('https://automationteststore.com/')
    cy.get('.thumbnail').as('product')
    cy.get('@product').find('.oneprice').invoke('text').as('itemPrice')
    cy.get('@product').find('.pricenew').invoke('text').as('saleItemPrice')

    let total = 0

    cy.get('@itemPrice').then(itemPrice => {
      let price = itemPrice.split('$')
      let NonSaleTotal = 0
      for (let i = 1; i < price.length; i++) {
        NonSaleTotal += Number(price[i])
      }
      total += NonSaleTotal

    })

    cy.get('@saleItemPrice').then(itemPrice => {
      let price = itemPrice.split('$')
      let saleTotal = 0
      for (let i = 1; i < price.length; i++) {
        saleTotal += Number(price[i])
      }
      total += saleTotal

    })

      .then(() => {
        expect(total).to.eql(616.7)
      })


  })


})