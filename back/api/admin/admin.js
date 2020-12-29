const { apiResponse, setSession, getSession } = require('../middleware/middleware')
class apiAdmin{
    #adminController = require('../../controller/admin/admin.js')
    constructor(){}
    start(app){
        console.log(new this.#adminController())
        app.post('/admin/signup',(req, res, next)=>{
            req.responseController = new this.#adminController().authPlayer(req.rawBody)
            next()
        }, setSession)
        app.get('/admin/addForm', getSession,(req, res, next)=>{
            console.log('dddd', req.entitySession);
            res.send('{"ok":"ok"}').status(200)
        })
    }
}
module.exports = new apiAdmin();