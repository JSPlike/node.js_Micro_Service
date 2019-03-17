// MariaDB와 연동하기
const mysql = require('mysql');
const conn = {
	host: 'localhost',
	user: 'micro',
	password: 'service',
	database: 'monolithic'
};
// 독립적 URI 생성

exports = onRequest = function(res, method, pathname, params, cb){
	switch (method) {
		case "POST":
			return register(method, pathname, params, (response) => {
				process.nextTick(cb, res, response);
			});
		case "GET":
			return inquiry(method, pathname, params, (response) => {
				process.nextTick(cb, res, response);
			});
		case "DELETE":
			return unregister(method, pathname, params, (response) => {
				process.nextTick(cb, res, response);
			});
		default:
			return process.nextTick(cb, res, null);
	}
}

// POST method에 /goods라는 URI가 호출되면 상품 정보를 저장할 수 있도록 monolithic_goods.js파일에서 기존 코드에 다음  register 함수를 추가합니다.

function register(method, pathname, params, cb){
	var response = {
		errorcode: 0,
		errormessage: "success"
	};

	/*
	입력 파라미터의 유효성 검사를 해서 필수 파라미터가 정상적으로 입력되었는지 확인 하는 부분 prams의 값들이 NULL인지 아닌지를 확인한다.
	만약 값들이 정상적으로 입력되어져있다면 MariaDB에 그 값들을 저장합니다.
	아래의 else{}내부 내용이 그러합니다.
	*/

	if (params.name == null || params.category == null || params.price == null || params.description == null) {
		response.errorcode = 1;
		response.errormessage = "Invalid Parameters";
		cb(response);
	} else {
		// connection변수를 만들어 mysql의 연결 인자를 저장한다.
		var connection = mysql.createConnection(conn);
		// 변수를 커넥한다.
		connection.connect();
		// 내부 쿼리를 작성한다.(SQL문)
		connection.query("insert into goods(name, category, price, description values(?, ?, ?, ?)",
			[params.name, params.category, params.price, params.description],
			(error, results, fields) => {
				if(error) {
					response.errorcode = 1;
					response.errormessage = error;
				}
				cb(response);
			});
		connection.end();
	}
}
// @param cb =>콜백

function inquiry(method, pathname, params, cb) {
	var response = {
		key: params.key,
		errorcode: 0,
		errormessage: "success"
	};

	var connection = mysql.createConnection(conn);
	connection.connect();
	connection.query("select * from goods", (error, results, fields) => {
		if(error || results.length == 0) {
			response.errorcode = 1;
			response.errormessage = error ? error : "no data";
	} else {
		response.results = results;
	}
		cb(response);
	});
	connection.end();
}

function unregister(method, pathname, params, cb) {
	var response = {
		key: params.key,
		errorcode: 0,
		errormessage: "seccess"
	};

	if (params.id == null) {
		response.errorcode = 1;
		response.errormessage = "Invalid Parameters";
		cb(response);
	} else {
		var connection = mysql.createConnection(conn);
		connection.connect();
		connection.query("delete from goods where id = ?",
			[params.id],
			(error, results, fields) => {
				if(error) {
					response.errorcode = 1;
					response.errormessage = error;
				}
				cb(response);
			});
		connection.end();
	}
}







