const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello start here");
  }
  if (req.url === "/about") {
    res.end("Welcome to about page ");
  }
  res.end(`
        <h1>Ooppes!</h1>
        <p>We can't seem the page</p>
        <a href="/">Back home</a>
        `);
});

server.listen(5000);
