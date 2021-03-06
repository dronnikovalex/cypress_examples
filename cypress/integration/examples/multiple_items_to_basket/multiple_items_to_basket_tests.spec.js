/// <reference types="cypress" />
import AutoStoreHomepage from '../../support/PageObjects/automaiton-test-store/StoreHomePage_PO'
import Haircare from '../../support/PageObjects/automaiton-test-store/StoreHaircare_PO'

describe('Iterating over elements', () => {
  const homepage = new AutoStoreHomepage()
  const haircare = new Haircare()

  before(function () {
    cy.fixture('products').then(products => globalThis.products = products)
  })

  beforeEach(() => {
    homepage.visitHomepage()
    homepage.getHairCareCategory()
  })

  it('Add items to basket', function () {
    // If condition checks witch browser was started
    if (Cypress.isBrowser('firefox') || Cypress.isBrowser('chrome') ) {
      haircare.addHaircareProducts()
    } else {
      cy.log('Not supproted browser, no logic here')      
    }
  })



})