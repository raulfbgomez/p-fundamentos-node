const http = require('http')

http.createServer(router).listen(3000)

function router(req, res) {
  console.log('Nueva peticion')
  console.log(req.url)
  res.writeHead(201, { 'Content-Type': 'text/plain'})
  res.write('Hola desde node HTTP request')
  switch(req.url) {
    case '/hola':
      res.write('Hola, como estas?')
      res.end()
      break
    default:
      res.write('Error 404')
  }
  // res.end()
}

console.log('Server is listening on localhost:3000')