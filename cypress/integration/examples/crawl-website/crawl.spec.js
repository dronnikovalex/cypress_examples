describe('It will crawl on a website', () => {

  it('Should visit all links', () => {
    const visited = new Set()
    const toVisit = ['/html-templates/crawl-website/index.html']

    function visitNextUrl() {

      if (!toVisit.length) {
        return
      }

      cy.log(`to visit: ${toVisit.join(', ')} `)
      const url = toVisit.shift()
      visited.add(url)

      cy.visit(url)
      cy.get('a')
        .should(Cypress._.noop)
        .then($links => {
          const links = $links
            .toArray()
            .map(link => link.pathname)
            .filter(href => !href.startsWith('http') && !href.startsWith('//') && href!=='/')
            .filter(href => !visited.has(href))
            .filter(href => !toVisit.includes(href))
          toVisit.push(...links)
        })
          .then(visitNextUrl)
    }

    visitNextUrl()

  })

})