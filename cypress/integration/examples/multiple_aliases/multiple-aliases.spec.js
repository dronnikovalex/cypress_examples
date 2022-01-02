describe('It should use multiple aliases to avoid pyramid of callbacks', () => {

  it('Should use multiple aliases (callback approach)', () => {

    cy.visit('html-templates/random-sum/random-sum.html')

    cy.get('#total')
      .invoke('text')
      .then(parseInt)
      .then(total => {
        cy.get('#sub')
          .invoke('text')
          .then(parseInt)
          .then(subtotal => {
            cy.get('#tax')
              .invoke('text')
              .then(parseInt)
              .then(tax => {
                cy.get('#tip')
                  .invoke('text')
                  .then(parseInt)
                  .then(tip => {
                    expect(total).to.eql(subtotal + tax + tip)
                  })
              })
          })
      })

  })

  it('Should use multiple aliases (aliases approach)', () => {

    cy.visit('html-templates/random-sum/random-sum.html')

    cy.get('#total').invoke('text').then(parseInt).as('total')
    cy.get('#sub').invoke('text').then(parseInt).as('subtotal')
    cy.get('#tax').invoke('text').then(parseInt).as('tax')
    cy.get('#tip').invoke('text').then(parseInt).as('tip')
      .then(function() {
        expect(this.total).to.eql(this.subtotal + this.tax + this.tip)
      })

  })


})