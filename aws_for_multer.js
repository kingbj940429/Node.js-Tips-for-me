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

let upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "speech.to.text",
    key: function (req, file, cb) {
      let extension = path.extname(file.originalname); //확장자
      cb(null, file.originalname)
    },
    acl: 'public-read-write',
  })
})

router.post('/upload', upload.single("wavFile"), function (req, res, next) {
  // req.file 은 `wavFile` 라는 필드의 파일 정보
  // wavFile은 form 태그의 input file의 name
  // input(type='file' name='imgFile')
  // 텍스트 필드가 있는 경우, req.body가 이를 포함할 것
  try {
    console.log("파일 정보 : ", req.file);
    python.pythonRunAws(req, res, path); //파이썬 실행 
  } catch (error) {
    console.error(error);
  }
  res.redirect('/');
})

module.exports = router;

