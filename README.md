# node.js 마이크로 서비스 공략

1. Mac에서 node와 npm의 간단한 설치
2. npm을 이용한 모듈 설치
3. miria DB 설치
4. cURL 설치

#### 1) Mac에서 node와 npm의 간단한 설치

> You can install from Node.js site
>
> node : https://nodejs.org
>
> npm : https://www.npmjs.com

#### 2) npm을 이용한 모듈 설치


> node와 npm의 버전을 확인할 수 있다.
```
  $node -v
  $npm -v
```
> npm 초기화
> 현재 폴더패키지에 마이크로 모듈들을 따로 관리할 수 있다.
```
  $npm init
```
> package.json 파일이 생성될 것이다.
```
  $ cat package.json 명령으로 확인해보자
```

> mysql 모듈 설치 해보기
```
  $npm install mysql -save
```
> mysql 모듈 삭제 해보기
```
  $npm uninstall mysql -save
```

#### npm이 아닌 package.json을 이용한 설치도 가능하다.

> 먼저 package.json파일을 연후 "dependencies" : {}안에 원하는 모듈을 입력
```
  $npm install
  $npm list
```
> 위의 명령어를 사용해 현재 설치된 모듈의 종류를 확인해보자

> npm install mysql@2.1 과 같은 명령어로 원하는 버전의 모듈을 설치할 수 있다.

#### 3. MiriaDB 설치

If windows
> http://mariadb.org

If Mac
> 이때는 Homebrew를 이용해 설치한다.
>
> Homebrew는 이미 설치되어 있다고 가정하겠다.
```
  $brew install miriadb
```
접속
```
  $mysql.server start
```
로그인(mysql)
```
  $mysql -uroot -p
  $(password)
```
> show databases; 명령어로 존재하는 데이터베이스 목록을 확인해자


#### 4. cURL 설치

Mac에서의 curl 설치는 매우매우 간단하다.
```
  $brew install curl

  $curl www.naver.com
  $curl -v www.naver.com
```
> curl 명령어로 사이트를 살펴보자 사이트의 html을 그대로 긁어온다. 또한,
>
> -v 명령을 추가하면 해당 사이트의 상세한 정보를 조회할 수 있다.

curl명령을 사용하면 다양한 사이트의 정보를 가져올수 있다.
> - 아래의 코드를 보자
```
  $curl -X GET -L https://www.google.com?search=박준영
```
> 위의 명령어는 박준영이라는 검색을 한 구글의 화면 정보를 가져온다.
