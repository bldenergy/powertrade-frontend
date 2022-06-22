const { createServer } = require('https')
const { parse } = require('url')
const next = require('next')
const fs = require('fs')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const httpsOptions = {
  key: fs.readFileSync('./127.0.0.1-key.pem'),
  cert: fs.readFileSync('./127.0.0.1.pem')
}
app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    console.log(
      `> Server started on https://localhost:${process.env.PORT || 3000}`
    )
  })
})
