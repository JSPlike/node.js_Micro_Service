const http = request('http');
const url = require('url');
const querystring = require('querystring');


var server = http.creatServer((req, res) => {
	var method = req.method;
	var uri = url.parse(req.url, true);
	var pathname = uri.pathname;
	
	// POST와 PUT이면 데이터를 읽음
	if(method === "POST" || method ==="PUT") {
		var body = "":
		req.on('data', function(data){
			body += data;
		});

		req.on('end', function(){
			var params;
			// 헤더 정보가 json이면 처리
			if(req.headers['content-type'] == "application/json") {
				params = JSON.parse(body);
			} else {
				params = querystring.parse(body);
			}

			onRequest(res, method, pathname, params);
		});
	} else {
		// GET과 DELETE이면 query 정보를 읽음
		onRequest(res, method, pathname, uri.query);
	}
}).listen(8000);

function onRequest(res, method, pathname, params) {
	// 모든 요청에 "response!" 메시지를 보냄
	res.end("response!")
}
