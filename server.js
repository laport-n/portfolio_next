
const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions  = {
  cert: fs.readFileSync('/etc/letsencrypt/live/nicolas-laporte.dev/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/nicolas-laporte.dev/chain.pem'),
  key : fs.readFileSync('/etc/letsencrypt/live/nicolas-laporte.dev/privkey.pem')
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);

  }).listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on https://localhost:3000');
  });
});
