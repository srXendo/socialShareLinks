const uController = require('../../controller/user/userController.js')
const { apiResponse, setSession } = require('../middleware/middleware')
module.exports.start = async(app)=>{
    app.post('/user/add', (req, res, next) => {
        req.responseController = uController.addUser(req.rawBody)
        next() 
    }, apiResponse)
    app.post('/user/signup',(req, res, next)=>{
        req.responseController = uController.authUser(req.rawBody)
        next()
    }, setSession)
}
