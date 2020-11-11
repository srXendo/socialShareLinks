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
    app.get('/user/getList', (req, res, next)=>{
        res.send(JSON.stringify([
            {playerName: 'alberto', photoProfile: '?', position: 'ala', height: 1.80, years: 26, weight: 80, nation: 'spain'},
            {playerName: 'david', photoProfile: '?', position: 'ala', height: 1.80, years: 26, weight: 80, nation: 'franch'}
        ])).status(200)
    })
}
