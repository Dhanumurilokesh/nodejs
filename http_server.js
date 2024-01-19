let http = require("http");

//req :: from angular, react, front end.
//res :: we give node will give.
let server = http.createServer((req, res) => {
  //res.writeHead(200, { 'content-Type ': 'text/html' })
  res.write("<h1>welcome to http server</h1>");
  //after completing ur logic we need to lock it.
  res.end();  //locking the res object. 

});

//server port number needed.
server.listen("8080");
console.log('<h1>server listening port number 8080</h1 >');

//http :: protocol >>> what is local host - domain,
//http:/localhost:8080/?uname=ashokit&upwd=ashokit
//how to read query parameters.
