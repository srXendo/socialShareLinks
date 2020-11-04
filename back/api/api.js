var express = require('express');
var app = express();
var process = require('process')
let {join, dirname} = require('path');
var userApi = require(join(dirname(__filename)+'/user/user.js'));
const {cors, bodyParser} = require(join(dirname(__filename)+'/middleware/middleware.js'));
console.log(userApi)
// respond with "hello world" when a GET request is made to the homepage
console.log(cors,bodyParser);

app.use(cors)
app.use(bodyParser)
userApi.start(app);
app.listen(process.env.back_port,()=>{
    console.log(`start server in port: ${process.env.back_port}`)
})