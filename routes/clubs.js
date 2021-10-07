const { Router, response } = require('express');
const express = require('express');
const router = express.Router();
const path = require('path');
const csv = require('../data')

//router의 어느 경로('/')로 들어왔을 때 get 처리를 하겠다
router.route('/').get((req, res, next) => {
  //get에서 어떤 일을 할 것인가
  return res.send("clubsRouter works!");
});

router.route('/:filename/').get((req, res) => {
  const fileName = req.params.filename;
  const filePath = path.join(__dirname, "..", "data", fileName + ".csv");

  const toSend = csv(filePath);
  res.json(toSend);
})


module.exports = router;
