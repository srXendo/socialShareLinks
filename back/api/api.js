var express = require('express');
var app = express();
var process = require('process')
let {join, dirname} = require('path');
var userApi = require(join(dirname(__filename)+'/user/user.js'));
console.log(userApi)
// respond with "hello world" when a GET request is made to the homepage
userApi.start(app);
app.listen(process.env.port,()=>{
    console.log(`start server in port: ${process.env.port}`)
})