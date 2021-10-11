/// <reference types="cypress" />

describe('Verifying cypress commands, variables and jquery variables', () => {

  it('It navigates to specific product page', () => {

    cy.visit("https://automationteststore.com/")

    //The following will fail because order of execution are violated
    // const skinLink = cy.get('a[href*="product/category&path"]').contains('Skincare')
    // const hairCareLink = cy.get('a[href*="product/category&path"]').contains('Hair Care')
    // skinLink.click()
    // hairCareLink.click()

    //The following will pass because its calling right after declarating but its also not recommended way
    const skinLink = cy.get('a[href*="product/category&path"]').contains('Skincare')
    skinLink.click()

    const hairCareLink = cy.get('a[href*="product/category&path"]').contains('Hair Care')
    hairCareLink.click()

    //==========================================================
    //The correct way to call a resource and interact with them
    //The order of exection are guaranted now, because we're chaining cyppress commands
    cy.get('a[href*="product/category&path"]').contains('Skincare').click()
    cy.get('a[href*="product/category&path"]').contains('Hair Care').click()

    //==========================================================
    //The correct way to extract properies from the DOM elements and save them to constants
    cy.get('h1 > .maintext').then($header => {
      const headerText = $header.text()
      expect(headerText).is.eql('Hair Care')

    })

  })

})

