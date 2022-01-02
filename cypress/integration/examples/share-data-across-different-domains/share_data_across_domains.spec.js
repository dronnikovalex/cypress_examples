describe('It will share data across different domains in single spec', () => {

  it('Should visit first site', () => {

    cy.clock()
    cy.visit('https://widget.klickly-dev.com/')
    cy.get('[class$="slide__title"]')
      .first()
      .invoke('text')
      .then(title => {
        cy.task('save', title)
      })

  })

  it('Should accept data from another web-site', () => {

    cy.visit('https://www.google.com/')
    cy.task('load')
      .then(title => {
        cy.get('input.gLFyf.gsfi').type(title + '{enter}')
        cy.title().should('eql', `${title} - Поиск в Google`)
      })

  })

})