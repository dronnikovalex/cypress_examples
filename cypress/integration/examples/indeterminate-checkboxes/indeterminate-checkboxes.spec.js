describe('Itt test Indeterminate Checkboxes', () => {

  beforeEach(() => {
    cy.visit('html-templates/Indeterminate-checkboxes/index.html')
  })

  it('Should verify Indeterminate Checkboxes state', () => {
    //parent checkbox is not checked and not determinated by default
    cy.get('#tall').should('not.be.checked')
      .and('have.prop', 'indeterminate', false)
    //checbox is not checked by default
    cy.get('#tall-2').should('not.be.checked')
    //then check it
    cy.get('#tall-2').check()
    //parent checkbox still not checked
    cy.get('#tall').should('not.be.checked')
      //but has to be indeterminated
      .and('have.prop', 'indeterminate', true)
    //after clicking on parent checbox it goes to be checked but not indeterminated
    cy.get('#tall').check().should('be.checked')
  })

  it('Should be able to remove indeterminate prop by invoke', () => {
    cy.get('#tall-2').check()
    //parent checkbox still not checked
    cy.get('#tall').should('not.be.checked')
      //but has to be indeterminated
      .and('have.prop', 'indeterminate', true)
      //set property indeterminate to false by invoke() method
      .invoke('prop', 'indeterminate', false)
      .should('not.be.checked')
  })

})