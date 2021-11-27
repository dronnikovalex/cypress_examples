/// <reference types="cypress" />

describe('It test loading elements and cancel loading', () => {

  function onPage(index) {
    //check that button has correct attribute with value
    cy.contains('button[role="tab"]', `Page ${index}`,).should('have.attr', 'aria-selected', 'true')
    //check that textarea has correct text
    cy.contains('.content', `Page ${index} content`)
  }

  beforeEach(() => {
    cy.visit('html-templates/list-with-pages/index.html')
  })

  it('should load pages', () => {
    onPage(1)
    //check that inactive tab doesn't have attr 
    cy.contains('button[role="tab"]', 'Page 2',).should('not.have.attr', 'aria-selected', 'true')

    cy.log('**-----goes to page 2-----**')

    cy.contains('button[role="tab"]', 'Page 2').click()
    onPage(2)
    //check that inactive tab doesn't have attr 
    cy.contains('button[role="tab"]', 'Page 1',).should('not.have.attr', 'aria-selected', 'true')
  })


  it.only('should check loader visibility', () => {
    onPage(1)
    //click "Page 2" and assert that loader has appear
    cy.contains('button[role="tab"]', 'Page 2').click()
      .should('have.attr', 'data-loading', 'true')
    onPage(2)
    //check that inactive tab doesn't have attr 
    cy.contains('button[role="tab"]', 'Page 1',).should('not.have.attr', 'aria-selected', 'true')
  })

  it.only('should cancel loading', () => {
    onPage(1)
    //click "Page 2" and assert that loader has appear
    cy.contains('button[role="tab"]', 'Page 2').click()
      .should('have.attr', 'data-loading', 'true')
      .wait(1000)
    //click "Page 2" again and verify that loader has disappear
    cy.contains('button[role="tab"]', 'Page 2').click()
      .should('not.have.attr', 'data-loading', 'true')
    //verify that we're still on the page 1
    onPage(1)
  })

})