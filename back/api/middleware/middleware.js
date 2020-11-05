const { response } = require("express")

module.exports.cors = (req,res,next)=>{
    try{
        
    res.header('Access-Control-Allow-Headers', 'Content-Type')

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
            console.log(doc)
            res.status(doc.code).send(doc.data)})
        .catch(err => {
            //console.log(doc)
            console.log(err)
            console.error(new Error(err.data.stack))
            res.status(500).send('no ok')
            return err
        });
}