# node.js Micro_Service

1. Mac에서 node와 npm의 간단한 설치
2. npm을 이용한 모듈 설치


#### 1) Mac에서 node와 npm의 간단한 설치

> You can install from Node.js site
> node : https://nodejs.org
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
