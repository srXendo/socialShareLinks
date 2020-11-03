var express = require('express');
var app = express();
var process = require('process')
let {join} = require('path');
var userApi = require(join('.\\user\\user.js'))
// respond with "hello world" when a GET request is made to the homepage
userApi.start(app);
app.get('/', function(req, res) {
  res.send('hello world');
});
app.listen(process.env.port,()=>{
    console.log(`start server in port: ${process.env.port}`)
})