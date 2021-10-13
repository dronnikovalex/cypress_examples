/// <reference types="cypress" />

class AutoStoreHomepage {

  visitHomepage () {
    cy.visit('https://automationteststore.com/')
  }
  
  getHairCareCategory () {
    cy.get('a[href*="product/category"]').contains('Hair Care').click()
  }

}

export default AutoStoreHomepage
