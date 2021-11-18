/// <reference types="cypress" />

describe('Handling mouse actions', () => {

  it('Scroll to view', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
  })

  it('Should be able drag-n-drop', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()

    cy.get('#draggable').trigger('mousedown', { which: 1 })
    cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
  })

  it('Should be able perform a double mouse click', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()

    cy.get('#double-click').dblclick()
  })

  it.only('Should be able to hold left click mouse button', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()

    cy.get('#click-box').trigger('mousedown', { which: 1 })
      .then(($el) => {
        expect($el).to.have.css('background-color', 'rgb(0, 255, 0)')
      })
  })

})
