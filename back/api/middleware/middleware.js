const { response } = require("express")
const crypto = require('../../libs/crypto.js');
module.exports.cors = (req,res,next)=>{
    try{
 
    res.header('Access-Control-Allow-Headers', 'Authorization, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
    res.header('Access-Control-Allow-Credentials',true);
    res.header('Access-Control-Allow-Origin',`${process.env.front_prot}://${process.env.front_domain}:${process.env.front_port}`)
    res.header('Access-Control-Request-Method', req.method)
    res.header('Content-Type','application/json;charset=UTF-8')
    next()
    }catch(err){
        console.error
    }
}
module.exports.bodyParser = async(req,res,next)=>{
    var data = "";
    req.on('data', chunk => { data += chunk })
    req.on('end', () => {
        req.rawBody = data;
        next();
    })
}
module.exports.apiResponse = (req,res,next) => {
    req.responseController
        .then(doc =>{   
            res.status(doc.code).send(doc.data)})
        .catch(err => {
            console.log(err)
            console.error(new Error(err.data.stack))
            res.status(500).send('no ok')
            return err
        });
}
module.exports.setSession = (req, res, next) => {

    req.responseController.then(response => {
        console.log('response api setSession', response)
        if(response.sucess){
            res.cookie(`${process.env.back_cookie_name}`,crypto.encoding(JSON.stringify(response.data)) , { maxAge: process.env.back_cookie_maxAge, httpOnly: true, origin: process.env.back_domain});
            res.status(200).send('{"ok":"ok"}');
        }else{
            res.status(response.code).send(response.data);
        }
    }).catch(err => {
        console.error(new Error(err).stack);
        res.send('{"no":"ok"}').status(500)
    })
}