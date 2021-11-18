/// <reference types="cypress" />

describe('Test Contact Us form via automation test store', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('automationstore_homepage'))
  })

  it('Should successfull from submission via contact us form by using selectors', function () {

    cy.get('.info_links_footer').find('li').contains('Contact Us').click()
    //different approach
    cy.title().should('contain', 'Contact Us')

    cy.get('#ContactUsFrm_first_name').type('Alex')
    cy.get('#ContactUsFrm_email').type('test@mail.ru')
    cy.get('#ContactUsFrm_enquiry').type('SampleText')
    cy.get('button[type=submit]').contains('Submit').click()

  })

  it('Should successfull from submission via contact us form by using xPath', function () {
    
    cy.xpath("//a[contains(@href, 'contact')]").click()
    cy.title().should('contain', 'Contact Us')

    cy.xpath("//input[@id='ContactUsFrm_first_name']").type('Alex')
    cy.xpath("//input[@id='ContactUsFrm_email']").type('test@mail.ru')
    cy.xpath("//textarea[@id='ContactUsFrm_enquiry']").type('SampleText')
    cy.xpath("//button[@type='submit' and @title='Submit']").click()
  })

})
