var express = require('express');
var router = express.Router();
const path = require('path');
const python = require('./python'); //파이썬 모듈 불러오기
const fs = require('fs');
/**
 * AWS-SDK 관련
 */
const AWS = require("aws-sdk");
const multer = require('multer');
const multerS3 = require('multer-s3');

AWS.config.loadFromPath(__dirname + "/../config/awsconfig.json");
let s3 = new AWS.S3();
json_path = path.join(__dirname, "../");
/*
./config/awsconfig.json ==> .gitignore 처리 꼭!!
{
    "accessKeyId": "",
    "secretAccessKey": "",
    "region": ""
  }
*/

const func1 = () =>{
    fs.readFile(`${json_path}/reformat_json/reformat_ytn.json`, (err, data) => { // => json 파일경로 읽어줘야함
      if (err) throw err;
      data = data.toString(); //버퍼로 생성되기 때문에 꼭 toString 해줘야함
      var buf = Buffer.from(JSON.stringify(data));
  
      let json_option = {
        Bucket: 'speech.to.text',
        Key: 'filename.json',
        Body: buf,
        ContentEncoding: 'utf-8',
        ContentType: 'application/json',
        ACL: 'public-read'
      };
    
      s3.upload(json_option, function (err, data) {
        if (err) {
          console.log(err);
          console.log('Error uploading data: ', data);
        } else {
          console.log('succesfully uploaded!!!');
        }
      });
    });
  }
  func1(); // json 형식으로 s3에 올라가게됨

module.exports = router;


 
