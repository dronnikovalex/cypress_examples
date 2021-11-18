import { Given, When, Then, And, Before, After } from "cypress-cucumber-preprocessor/steps";

// Cucmuber before and after hooks
// Before(() => {
//   cy.log('Before')
// })

// After(() => {
//   cy.log('After')
// })

// beforeEach(function() {
//   cy.log('before')
// })

afterEach(() => {
  cy.log('afterEach hook')
})

const url = 'https://automationteststore.com/'

Given('Log counter', () => {
  cy.log('counter = 0')
})

Given('I open home page', () => {
  cy.visit(url)
}) 

When('I choose {string} category', category => {
  cy.get('.categorymenu a').contains(category).click()
})

And('I choose product {string}', product => {
  cy.get('a').contains(product).click()
})

And('I add product to cart', () => {
  cy.get('.productpagecart').click()
})

Then('I see product in a cart with valid total coast', () => {
  let total = 0

  cy.get('.product-list td:nth-child(6)').each($item => {
    let item = $item.text().split("$")
    total += +item[1]
  })
  .then(() => {
    cy.get('span.cart_total', { timeout: 5000 }).invoke('text').then($str => {
      let text = $str.split("$")
      
      expect(+text[1]).to.eql(total)
    })
  })
})

// describe('Adding item into the cart', () => {

//   it('should add successfully', () => {
//     //Перейти в магазин
//     cy.visit('https://automationteststore.com/')
//     //Клик по категории
//     cy.get('a[href$="path=68"]').click()
//     //Выбрать продукт и перейти в карточку
//     cy.get('a').contains('Womens high heel point toe stiletto sandals ankle strap court shoes').click()
//     //Добавить в коризну продукт и перейти в корзину
//     cy.get('.productpagecart').click()

//     let total = 0

//     cy.get('.product-list td:nth-child(6)').each($item => {
//       let item = $item.text().split("$")
//       total += +item[1]
//     })
//     .then(() => {
//       cy.get('span.cart_total', { timeout: 5000 }).invoke('text').then($str => {
//         let text = $str.split("$")
        
//         expect(+text[1]).to.eql(total)
//       })
//     })
//   })

// })