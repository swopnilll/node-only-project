import http from 'http';

const server = http.createServer((req, res) => {
  res.write("<h1>Hello world !");
  res.end();
})

server.listen(3001, () => console.log("server is running"));