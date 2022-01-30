describe('It tests worlde game', () => {

  it('should solve worlde', () => {

    cy.visit('https://www.powerlanguage.co.uk/wordle/')
      .its('localStorage.gameState')
      .then(JSON.parse)
      .its('solution')
      .then(word => {
        cy.get('game-icon[icon="close"]:visible').click()
        const solution = word
        solution.split("").forEach(letter => {
          cy.window().trigger('keydown', { key: letter}).wait(100)
        })
        cy.window().trigger('keydown', { key: 'Enter' })
      })
  })

})