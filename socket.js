module.exports = (io) => {
  io.on('connection', (sockek) => { // 접속에 대한 기능 from 서버단 처리
    console.log('A user is now connected')
  });
};
