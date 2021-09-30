/// <reference types="cypress" />

describe('It tests files uploading', () => {

  beforeEach(() => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#file-upload').invoke('removeAttr', 'target').click()
  })

  it('Uploading a file', () => {

    const fileName = 'laptop.png'

    cy.fixture(fileName, 'base64').then(fileContent => {
      cy.get('#myFile').attachFile({
        fileContent,
        fileName,
        mimeType: 'image/png'
      })
    })
    cy.get('#submit-button').click()

    cy.on('window:alert', $text => {
      expect($text).to.eql('Your file has now been uploaded!')
    })

  })

  it('Uploading no files', () => {
    cy.get('#submit-button').click()

    cy.on('window:alert', $text => {
      expect($text).to.eql('You need to select a file to upload!')
    })
  })

})