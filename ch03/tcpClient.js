 var net = require('net');
 var options = {
  port: 9000,
  host: "127.0.0.1"
 };

 var client = net.connect(options, () => { //server connect
  console.log("connected");
 });

 client.on('data', (data) => { // data receive
  console.log(data.toString());
 });

 client.on('end', () => { //connect end
  console.log("disconnected");
 });
