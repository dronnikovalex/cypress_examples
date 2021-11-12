/// <reference types="cypress"/>
const X2JS = require('x2js')
import 'cypress-each'

describe('Sitemap xml', () => {
  const urls = Cypress.env('sitemapUrls').map(url => {
    const parsedUrl = new URL(url)
    return parsedUrl.pathname
  })
  
  before(() => {
    expect(Cypress.env('sitemapUrls')).to.be.an('array').that.has.length.greaterThan(0)
  })

  it.each(urls)('url %s', (url) => {
    cy.visit(url)
  })


  // it('Fetch sitemap url', () => {

  //   cy.request('/sitemap.xml').its('body')
  //     .then(body => {
  //       const x2js = new X2JS()
  //       const jsonBody = x2js.xml2js(body)
  //       cy.log(jsonBody)
  //       expect(jsonBody.urlset.url).to.be.an('array').and.length.to.be.greaterThan(0)

  //       jsonBody.urlset.url.forEach(url => {
  //         const parsedUrl = new URL(url.loc)
          
  //         cy.request('HEAD', parsedUrl.pathname)
  //         cy.visit(parsedUrl.pathname)
  //       });
  //     })
  // })

})