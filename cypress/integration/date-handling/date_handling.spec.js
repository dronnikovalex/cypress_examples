/// <reference types="cypress" />

describe('Handling checkboxes', () => {

  it('Verify checking checkbox', () => {

    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#datepicker').invoke('removeAttr', 'target').click()
    cy.get('#datepicker').click()

    let date = new Date()
    date.setDate(date.getDate() + 201)
    
    let futureYear = date.getFullYear()
    let futureMonth = date.toLocaleDateString("en-US", {month: "long"})
    let futureDay = date.getDate()
   
    function getFutureYearAndMonth () {
      cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(monthAndYear => {
        if (!monthAndYear.text().includes(futureYear)) {
          cy.get('.next').first().click()
          getFutureYearAndMonth()
        }
      }).then((monthAndYear) => {
        if (!monthAndYear.text().includes(futureMonth)) {
          cy.get('.next').first().click()
          getFutureYearAndMonth()
        }
      })
    }

    function getFutureDay () {
      cy.get('.day').contains(futureDay).click()
    }

    getFutureYearAndMonth()
    getFutureDay()

  })



})
