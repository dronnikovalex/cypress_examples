describe('It should test collecting headings and subheadings', () => {

  it('Should collect headings and subheadings', () => {

    const sections = {}

    cy.visit('html-templates/headings_list')
    cy.get('section')
      .should('have.length.gt', 0)
      .each($section => {
        cy.wrap($section).find('h2').invoke('text')
          .then(heading => {
            sections[heading] = []
            cy.wrap($section).find('li, h3')
              .each($item => {
                sections[heading].push($item.text())
              })

          })

      })
      .then(() => cy.writeFile('cypress/fixtures/sections.json', sections))

  })

})