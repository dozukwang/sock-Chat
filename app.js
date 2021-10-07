const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


//router 묶기
const indexRouter = require('./routes/index') //확장자 없이 작성
const clubsRouter = require('./routes/clubs')

app.use('/', indexRouter); //mian에 들어올려 할 때 저거 실행
app.use('/clubs', clubsRouter); //clubs라우터에 들어오려 할 때 저거실행


// IndexRouter이라는 걸 만들어서 메인으로 들어오려고 하면 indexRouter을 확인하도록

server.listen(3000, () => {
  console.log('Express Server is now listening on local host:3000..')
});
