var express = require('express');
var app = express();
var process = require('process')
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});
app.listen(process.env.port,()=>{
    console.log(`start server in port: ${process.env.port}`)
})