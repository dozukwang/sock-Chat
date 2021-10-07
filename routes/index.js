const { Router } = require('express');
const express = require('express');
const router = express.Router();

//router의 어느 경로('/')로 들어왔을 때 get 처리를 하겠다
router.route('/').get((req, res, next) => {
  //get에서 어떤 일을 할 것인가
  return res.send("indexRouter works!");
})


module.exports = router;
