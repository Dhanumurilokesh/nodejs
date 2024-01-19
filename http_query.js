/* //import http module

let http = require('http');

Import url module       ::  used to read the query parameters.
Is it predefined module ::  yes.
No need to download     ::

let url = require('url');

Create server http server.
let server = http.createServer((req, res) => {
  MIME type == English ;;
  /set MIME type :: communication language between server and client.
  res.writeHead(200, { 'Content-Type': 'text/html' });

      we need to read/parse req query parameters,
      how to read?? --> ans :: url module. one function parse function.
      read url we need to parse boolean flag true.

  let obj = url.parse(req.url, true).query;

  if (obj.uname === "ashokit" && obj.upwd === "ashokit") {
    res.write('<h1>Log in Success</h1>');
  } else {
    res.write('<h1>log in failed</h1>');
  }
  res.end();
});

server.listen("8080");
console.log('<h1>server listening port number 8080</h1 >');*/

//import http module it is inbuilt in node modules.
/*let http = require('http');
//import url module to read query parameters.
let url = require('url');
//servver create
let server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  //read parameters so use url.parse function
  let query = url.parse(req.url, true).query;
  if (query.uname === 'lokeshit' && query.upwd === 'lokeshit') {
    res.write('<h1>Log in Success</h1>');
  } else {
    res.write('<h1>log in failed</h1>');
  }
  res.end();
});
server.listen('1234');*/

/*//steps :: http import, url import,create serever,set communication lang, read url, set query, end res
let http = require('http');
let url = require('url');
let erver = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  let obj = url.parse(req.url, true).query;
  if (obj.name === 'ashokit' && obj.pw === 'ashokit') {
    res.write('<h1>Log in Success</h1>');
  } else {
    res.write('login failed');
  }
  res.end();
});
erver.listen('1234');*/

//steps :: create TopologyOpeningEvent, create urlencoded, server create , communication, parse
/*let http = require('http');
let url = require('url');
let server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  let query = url.parse(req.url, true).query;
  if (query.name == 'ashok' && query.pwd == 'ashok') {
    res.write('login success')
  } else {
    res.write('login failed')
  }
  res.end();
})
server.listen('4444');
console.log('done')*/
/*let http = require('http');
let urlread = require('url');
let server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  let query = urlread.parse(req.url, true).query;
  if (query.name == 'ashok' && query.pwd == 'ashok') {
    res.write('login success')
  } else {
    res.write('login failed')
  }
  res.end();

});
server.listen('8080');
console.log('all set lets rock');*/

let http = require('http');

let url = require('url');

let server = http.createServer((req, res) => {
  //res.write('connected');
  //console.log('server created');
  let read = url.parse(req.url, true).query;
  if (read.name == 'read' && read.password == 'password') {
    res.write('logged in succesfull');
  } else {
    res.write('logged in failed')
  }
  res.end();
})
server.listen('4444');
console.log('allset');

