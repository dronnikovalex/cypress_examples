describe('It tests price in a table ', () => {

  it('Should check price', () => {

    cy.visit('html-templates/simple_table/table.html')
    cy.get('#s_table tbody tr')
      .each(row => {
        cy.wrap(row)
          .find('td')
          .spread(($item, $price, $quantity, $total) => {
            const name = $item.innerText
            const price = +$price.innerText.replace('$', '')
            const quantity = $quantity.innerText
            const total = +$total.innerText.replace('$', '')
            expect(total, `total ${name} price`).to.eql(price * quantity)
          })
      })
  })

})