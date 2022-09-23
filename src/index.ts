import http from 'http';

import users from './user.json'

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(users));
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log("server is running"));