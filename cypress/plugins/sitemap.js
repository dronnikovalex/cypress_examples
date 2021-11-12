const got = require('got')
const X2JS = require('x2js')

module.exports = async (on, config) => {
  const sitemapUrl = `${config.baseUrl}/sitemap.xml`
  const xml = await got(sitemapUrl).text()
  console.log(xml)
  const x2js = new X2JS()
  const jsonBody = x2js.xml2js(xml)
  const urls = jsonBody.urlset.url.map(url => url.loc)

  config.env.sitemapUrls = urls
  return config
}