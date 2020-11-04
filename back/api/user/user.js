const { addUser } = require('../../controller/user/userController.js')
const { apiResponse } = require('../middleware/middleware')
module.exports.start = async(app)=>{
    app.post('/user/add', (req, res, next) => {
        req.responseController = addUser(req.rawBody)
        next() 
    }, apiResponse)
}
