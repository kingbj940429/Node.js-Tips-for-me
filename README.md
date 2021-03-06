[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fkingbj940429&count_bg=%2308D791&title_bg=%23555555&icon=ulule.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
# 목차
1) [Node.js로 AWS-SDK를 사용하여 S3 버킷에 json 파일 업로드 하기](#1장)

2) [Node.js로 AWS-SDK, Multer, Multer-s3를 사용하여 S3 버킷에 파일 업로드 하기](#2장)

3) [로컬에 있는 Json을 파일을 Async/Await를 사용하여 동기화 시켜서 업로드 하기](#3장)

4) [Node.js에서 파이썬 파일 실행하기 및 모듈화 하는 방법](#4장)

5) [connect-redis 를 사용하여 세션 관리하기](#5장)

6) [bcrypt로 비밀번호 해싱 하기](#6장)

# 1장
## Node.js로 AWS SDK를 사용하여 S3 버킷에 json 파일 업로드 하기

![1](https://user-images.githubusercontent.com/63000843/99182771-617ce300-277a-11eb-8456-b4d12f7daa24.PNG)
### 1번
- **npm i aws-sdk** 를 터미널에서 실행하여 AWS 모듈을 사용하게 해줍니다.

- **AWS.config.loadFromPath** 는 AWS에 접속하기 위하여 필요한 accessky가 있는 파일을 설정해주는 클래스입니다.

- **let s3 = new AWS.S3()** 는 AWS 클래스를 사용하기위한 객체입니다.

- **json_path = path.join(__dirname, "../")** 은 현재 디렉토리의 경로입니다. path npm을 사용해야 합니다.

### 2번
- **AWS.config.loadFromPath** 에서 accessKey 사용을 위한 파일의 내용입니다.

![5](https://user-images.githubusercontent.com/63000843/99182905-6bebac80-277b-11eb-8743-d2b9aa798d7e.PNG)

### 3번
- 로컬에 있는 json 파일을 읽기위한 클래스입니다.

### 4번
- S3 버킷에 필요한 정보를 입력해줍니다.

- **Bucket** : 버켓이름

- **key** : 생성될 json 이름

- **body** : json 데이터

- **ContentEncoding** : 인코딩방법

- **ContentType** : 파일 형식

- **ACL** : 접근 권한(퍼블릭으로 해줘야한 접근 가능)

### 5번
- **4번** 에서 설정한 옵션으로 **s3.upload** 클래스로 인해 json 데이터가 업로드 됩니다.

[목차로 가기](#목차)

# 2장
# Node.js로 AWS-SDK, Multer, Multer-s3를 사용하여 S3 버킷에 파일 업로드 하기
![2](https://user-images.githubusercontent.com/63000843/99182772-617ce300-277a-11eb-964b-e507420e9d0f.PNG)

### 1번
- **aws-sdk, multer, multer-s3** npm들을 터미널에서 설치해줍니다.
- **AWS.config.loadFromPath** 로 accesskey가 있는 파일을 등록해줍니다.
- **let s3 = new AWS.S3()** 는 s3 객체를 사용하게 해줍니다.
- **awsconfig.json** 파일을 만들어 accesskey에 대한 정보를 입력해줍니다.

![5](https://user-images.githubusercontent.com/63000843/99182905-6bebac80-277b-11eb-8743-d2b9aa798d7e.PNG)

### 2번
- **let upload** 는 s3에 올릴 파일에 대한 옵션 입니다.

- **cb** 는 콜백함수입니다. 다른건 위에 json 보낼때와 유사합니다.

- **router** 를 이용하기 위한 form태그 action을 해줍니다.

- **upload.single("wavFile")** 인자는 input(tpye='file' name='wavFile) 입니다.

(사진의 name=imgFile은 오타입니다. wavFile이 맞습니다.)

[목차로 가기](#목차)

# 3장
# 로컬에 있는 Json을 파일을 Async/Await를 사용하여 동기화 시켜서 업로드 하기
![4](https://user-images.githubusercontent.com/63000843/99182769-60e44c80-277a-11eb-9fd6-f2fc8e202b70.PNG)

### 1번

- **const util = require('path')** : util은 내장모듈이고 promisify을 갖고 있습니다. 

- **util.promisify(클래스.함수)** : 클래스에 있는 함수를 프로미스화 시켜줍니다.(동기식으로 사용하게 해줌)

- 동기화 시킨 함수 **(async/await)** 를 사진과 같이 사용하면 됩니다.

(꼭 해당 동기화 함수를 담고 있는 함수에 **async** 선언을 해주어야 합니다.)

[목차로 가기](#목차)

# 4장
# Node.js에서 파이썬 파일 실행하기 및 모듈화 하는 방법
![3](https://user-images.githubusercontent.com/63000843/99182767-5fb31f80-277a-11eb-9e0a-2d8a37645a1c.PNG)

### 1번
- **.py** 에 보낼 옵션입니다.

**scriptPath** : 실행될 파이썬의 위치

**args** : 파이썬 파일에 전송한 인자, 배열 형식이다.

```python
import sys
print sys.argv[0] 
```
이런식으로 py에 전달된다. 주의할점은 sys.argv[0]에는 경로가 들어가므로

원하는 값은 **sys.argv[1]** 에 있습니다.

### 2번
- **PythonShell.run()** : 파이썬 파일을 실행하는 클래스입니다.

- **results** 에는 파이썬에서 print(출력) 했을 때의 값이 들어 있다.
```python
import sys
print sys.argv[0]
```
라면 **sys.argv[0](배열에 들어가 있는 값이)** 이 출력된다.

### 마지막 별표

- **module.exports = {}** 해당 함수들이 있는 파일을 모듈화 시켜준다.

[목차로 가기](#목차)

# 5장
# connect-redis를 사용하여 세션 관리하기
### redis란?

REDIS(REmote Dictionary Server)는 메모리 기반의 “키-값” 구조 데이터 관리 시스템이며, 모든 데이터를 메모리에 저장하고 조회하기에 빠른 Read, Write 속도를 보장하는 비 관계형 데이터베이스입니다.

레디스는 크게 5가지< String, Set, Sorted Set, Hash, List >의 데이터 형식을 지원합니다.
Redis는 빠른 오픈 소스 인 메모리 키-값 데이터 구조 스토어이며, 다양한 인 메모리 데이터 구조 집합을 제공하므로 사용자 정의 애플리케이션을 손쉽게 생성할 수 있습니다.

즉 Mysql(RDS), MongoDB(NoSQL)처럼 디스크가 아닌 메모리가 저장하므로 휘발성을 가집니다. 대신 속도가 빠릅니다.

Node.js 내 connect-redis는 redis를 사용한다면 세션을 보다 효율적으로 관리할 수 있습니다.
기존의 세션값을 redis서버로 분리되어집니다.
이로써 여러개의 서버를 사용할 경우 세션값을 하나의 redis 서버로 통합하여 관리할 수 있습니다.

### 준비 할 것

1) redislabs 정보


![redis3](https://user-images.githubusercontent.com/63000843/99532429-a35e9100-29e7-11eb-9bd5-f751aeab7bad.PNG)
2) .env 파일

![redis2](https://user-images.githubusercontent.com/63000843/99532432-a48fbe00-29e7-11eb-849c-704da87c0b94.PNG)
### 사용 방법
![redis](https://user-images.githubusercontent.com/63000843/99531973-e409da80-29e6-11eb-8a18-fdfa1f1cdde9.PNG)

1) **npm i connect-redis@^3.0.0** 으로 꼭 3버전을 다운받으세요.

여기서 알아둘 것은 redis는 express-session에 종속되어 있기 때문에 require뒤에 express-session을 해주어야 한다.

2) session 안에 store라는 새로운 객체를 만들고 그림과 같이 설정해준다.

[목차로 가기](#목차)

# 6장
# bcrypt로 비밀번호  하기
### bcrypt란? 

  웹 페이지를 구현할 때 보안은 가장 기본적으로 수행되어야 할 요소입니다. 비밀번호를 텍스트 그대로 데이터 베이스에 저장해 관리하는 것은
  해커에게 대놓고 데이터를 주는 것과 다름 없습니다. 이를 방지하고자 비밀번호를 암호화 하는 것이 bcrypt 모듈입니다.

  bcrypt는 단방향 해시 함수를 이용한 모듈로써 **Salt** 라는 개념을 사용합니다. Salt 라는 값과 해시된 비밀번호를 합쳐 데이터베이스에 저장하게 되는데
  이렇게 하면, 만약 "1234" 같은 비밀번호를 해시함수에 넣었을때 항상 다른 값의 Salt 값과 비밀번호가 합쳐서 해커들이 비밀번호를 찾는데 있어
  더욱 힘들게 만듭니다.

### 사용 방법

1) npm i bcrypt를 수행합니다.

2) const bcrypt = require('bcrypt'); 로 불러옵니다.

### 설명

![bcrypt02](https://user-images.githubusercontent.com/63000843/99870821-5530d400-2c19-11eb-8f61-93e4de25cd46.PNG)

1) 이미지는 async/await를 사용한 bcrypt 구문입니다. 두번째 "12"라는 인자 값이 바로 **Salt** 입니다.

  다음과 수행하면 해쉬된 password값을 받을 수 있습니다.

![bcrypt01](https://user-images.githubusercontent.com/63000843/99870822-56620100-2c19-11eb-85df-d696381c9759.PNG)

1) 위 이미지에서 hash 된 password를 가져와서 텍스트로 입력받은 비밀번호와 compare를 합니다. 같다면 true, 다르면 false를 반환합니다.

[목차로 가기](#목차)
