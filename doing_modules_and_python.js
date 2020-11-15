const {PythonShell} = require('python-shell'); // 파이썬을 사용하기 위한 라이브러리 npm i python-shell 
 
/*
    모듈은 자바의 클래스 개념으로 보면 됨
*/

const pythonRunAws = (req, res, path) => { //모듈의 함수
    var options = {
        mode: 'text',
        scriptPath: path.join(__dirname, "../python/"),
        args: [`${req.file.originalname}`]
    };
    console.log("pythonRunAws - options : ",options);
    PythonShell.run('aws.py', options, function (err, results) {
        if (err){
            throw err; 
        } 
        console.log("----------파이썬 pythonRunAws 실행 완료---------");
        console.log(results);
        pythonRunReformat(req, res, path);
    });
}

const pythonRunReformat = (req, res, path) => {//모듈의 함수2
    json_path = path.join(__dirname, "../");
    var options = {
        mode: 'text',
        scriptPath: path.join(__dirname, "../python/"),
        args: [`${req.file.originalname}`, json_path]
    };
    console.log("pythonRunReformat - options : ",options);
    PythonShell.run('reformat.py', options, function (err, results) {
        if (err){
            throw err; 
        } 
        console.log("----------파이썬 pythonRunReformat 실행 완료---------");
        console.log(results);
    });
}

module.exports = { //모듈 시켜준걸 다른 곳에서 사용하기 => const '사용할 모듈 이름' = require('현재 모듈이 있는 위치');
    pythonRunAws,
    pythonRunReformat,
}