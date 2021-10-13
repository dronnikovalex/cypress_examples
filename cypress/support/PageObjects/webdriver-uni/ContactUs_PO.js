/// <reference types="cypress" />

class ContactUs {
  formSubmission (firstName, lastName, email, comment, $selector, text) {
    cy.get('[name=first_name]').type(firstName)
    cy.get('[name=last_name]').type(lastName)
    cy.get('[name=email]').type(email)
    cy.get('textarea.feedback-input').type(comment)
    cy.get('input[type="submit"]').click()
    cy.get($selector).should('contain', text)
  }
}

export default ContactUs