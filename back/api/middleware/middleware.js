module.exports.setHeaders = (req,res,next)=>{
    res.setHeaders('Access-Control-Allow-Origin',`${process.env.front_prot}://${process.env.front_domain}:${process.ebv,front_port}`)
}