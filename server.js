const { createServer } = require('http')
const next = require('next')

const fs = require('fs');

const port = parseInt(process.env.PORT, 10) || 443
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const httpsOptions = {
  cert: fs.readFileSync('/etc/letsencrypt/live/nicolas-laporte.dev/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/nicolas-laporte.dev/chain.pem'),
  key : fs.readFileSync('/etc/letsencrypt/live/nicolas-laporte.dev/privkey.pem')
};

app.prepare().then(() => {
createServer(httpsOptions, (req, res) => {
  const parsedUrl = new URL(req.url, 'http://w.w')
  const { pathname, query } = parsedUrl

  if (pathname === '/a') {
    app.render(req, res, '/a', query)
  } else if (pathname === '/b') {
    app.render(req, res, '/b', query)
  } else {
    handle(req, res, parsedUrl)
  }
}).listen(port, (err) => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
})
})
