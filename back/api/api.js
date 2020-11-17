var express = require('express');
var app = express();
var process = require('process')
let {join, dirname} = require('path');
const playerApi = require(join(dirname(__filename)+'/player/player.js'));
const clubApi = require(join(dirname(__filename)+'/club/club.js'));
const {cors, bodyParser, apiResponse} = require(join(dirname(__filename)+'/middleware/middleware.js'));

app.use(cors)
app.use(bodyParser)
playerApi.start(app)
clubApi.start(app)


app.listen(process.env.back_port,()=>{
    console.log(`start server in port: ${process.env.back_port}`)
})