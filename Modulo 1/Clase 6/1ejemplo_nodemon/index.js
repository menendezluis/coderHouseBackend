const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello con sin nodemon!");
});

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
