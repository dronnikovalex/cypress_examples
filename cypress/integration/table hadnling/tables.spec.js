/// <reference types="cypress" />

describe('Handling tables', () => {

  beforeEach(() => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#data-table').invoke('removeAttr', 'target').click()
  })

  it('Getting total age of all users', () => {

    let total = 0
    cy.get('#thumbnail-1 td').each($el => {
      if (Number($el.text())) {
        total += Number($el.text())
      }
    })
      .then(() => {
        expect(total).to.eql(322)
      })

  })

  it.only('Getting age of given user', () => {

    cy.get('#thumbnail-1 td:nth-child(2)').each(($el, index, $list) => {
      if ($el.text() === 'Doe') {
        cy.get('#thumbnail-1 td:nth-child(2)').eq(index).next().then(age => {
          const userAge = Number(age.text())
          expect(userAge).to.eql(20)
        })

      }
    
    })

  })

})