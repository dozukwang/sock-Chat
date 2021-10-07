const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const indexRouter = require('./routes/index') //확장자 없이 작성

app.use('/', indexRouter);

// IndexRouter이라는 걸 만들어서 메인으로 들어오려고 하면 indexRouter을 확인하도록

server.listen(3000, () => {
  console.log('Express Server is now listening on local host:3000..')
});
