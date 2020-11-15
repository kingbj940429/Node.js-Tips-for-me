# Node.js로 AWS-SDK를 사용하여 S3 버킷에 json 파일 업로드 하기

### 1번
**npm i aws-sdk** 를 터미널에서 실행하여 AWS 모듈을 사용하게 해줍니다.

**AWS.config.loadFromPath** 는 AWS에 접속하기 위하여 필요한 accessky가 있는 파일을 설정해주는 클래스입니다.

**let s3 = new AWS.S3()** 는 AWS 클래스를 사용하기위한 객체입니다.

**json_path = path.join(__dirname, "../")** 은 현재 디렉토리의 경로입니다. path npm을 사용해야 합니다.

### 2번
**AWS.config.loadFromPath** 에서 accessKey 사용을 위한 파일의 내용입니다.

### 3번
로컬에 있는 json 파일을 읽기위한 클래스입니다.

### 4번
S3 버킷에 필요한 정보를 입력해줍니다.

**Bucket** : 버켓이름

**key** : 생성될 json 이름

**body** : json 데이터

**ContentEncoding** : 인코딩방법

**ContentType** : 파일 형식

**ACL** : 접근 권한(퍼블릭으로 해줘야한 접근 가능)

### 5번
**4번** 에서 설정한 옵션으로 **s3.upload** 클래스로 인해 json 데이터가 업로드 됩니다.

# Node.js로 AWS-SDK, Multer, Multer-s3를 사용하여 S3 버킷에 파일 업로드 하기

# 로컬에 있는 Json을 파일을 Async/Await를 사용하여 동기화 시켜서 업로드 하기

# Node.js에서 파이썬 파일 실행하기 및 모듈화 하는 방법
