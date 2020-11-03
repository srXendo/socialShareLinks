let {env} = require('process');
let {join} = require('path');
function fnct(){
    try{
        
        require('dotenv').config({ path: join(env.NODE_ENV ? env.NODE_ENV: './config/development' + '/.env' )});

    }catch(err){
    console.error(new Error(err))
}
}
module.exports = fnct()