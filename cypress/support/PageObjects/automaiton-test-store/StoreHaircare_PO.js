/// <reference types="cypress" />

class AutoStoreHaircare {

  addHaircareProducts() {
    globalThis.products.productsNames.forEach(item => {
      cy.addMultipleItems(item)
    })
  }

}

export default AutoStoreHaircare
