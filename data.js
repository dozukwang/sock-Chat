// 여기서 csv data 받아서 json으로 가공, clubs.js는 가공된 걸 받아서 처리
const fs = require('fs');

module.exports = (filePath) => {
  dataToRead = fs.readFileSync(
    filePath,
    {encoding:"utf-8"}
  );

  //데이터 자르기
  const rows = dataToRead.split('\n'); //엔터 단위로 줄 자르기
  const headers = rows[0].split(',') //첫 줄은 항목이름 = 따로 보관

  const rowsData = []; //전체 결과물 담는곳

  rows.slice(1).forEach((row) => { //첫 줄 제외한 부분부터 1개씩...

    const rowData = {}; //한줄 데이터 담는곳
    
    for (let headerIndex=0; headerIndex < headers.length; headerIndex++) {
      const header = headers[headerIndex];
      rowData[header] = row.split(',')[headerIndex];
    }

    rowsData.push(rowData);
  });
  return rowsData;
};
