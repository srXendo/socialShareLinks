module.exports.start = async(app)=>{
    app.post('/user/add',(req,res,next)=>{
        console.log(req.body);
    })
}
