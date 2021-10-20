/// <reference types="cypress" />

class AutoStoreHaircare {

  addHaircareProducts() {
    globalThis.products.productsNames.forEach(item => {
      cy.addMultipleItems(item)
        // .then(() => {
        //   debugger
        // })
    })
    //Different approach debug()
    cy.get('.dropdown-toggle > .fa').click().debug()
  }

}

export default AutoStoreHaircare
