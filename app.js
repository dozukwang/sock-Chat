const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => { //메인페이지에 접근하려고 할 때 이런 것을 하겠다
  res.send('Express work!');
  
});

server.listen(3000, () => {
  console.log('Express Server is now listening on local host:3000..')
});
