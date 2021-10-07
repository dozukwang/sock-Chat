module.exports = (io) => {
  io.on('connection', (sockek) => { // 접속에 대한 기능 from 서버단 처리
    console.log('A user is now connected')

    sockek.on('chat message', (msg) => {
      io.emit('chat message', msg); // 서버에 연결된 모든 사용자(클라)에게 메세지 전달하는 것(일방향 통신)
      console.log("message:", msg); // 콘솔창에 입력한거 뜨게(자신의)
    });

    sockek.on('disconnect', () => {
      console.log('disconnected')
    });
  });
};
