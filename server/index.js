const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {

  if (req.url == '/') {
    fs.readFile(path.join(__dirname, 'public', 'list.html'), (err, data) => {
    
      if (err) {
        throw err
      }

      res.writeHead(200, {
        'Content-type': 'text/html'
      })
      
      res.end(data)

    })
  }
  
})

server.listen(3001, () => {
  console.log('Started')
})