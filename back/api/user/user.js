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
            {playerName: 'Alberto', photoProfile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYG2HvFOIpbog4D1M75FOpoK6QbUOy5rNa3Q&usqp=CAU', position: 'ala', height: 1.80, years: 30, weight: 80, nation: 'spain'},
            {playerName: 'David', photoProfile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYG2HvFOIpbog4D1M75FOpoK6QbUOy5rNa3Q&usqp=CAU', position: 'ala', height: 1.80, years: 26, weight: 80, nation: 'franch'},
            {playerName: 'Pol', photoProfile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYG2HvFOIpbog4D1M75FOpoK6QbUOy5rNa3Q&usqp=CAU', position: 'ala', height: 1.80, years: 26, weight: 80, nation: 'franch'},
            {playerName: 'Marc', photoProfile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYG2HvFOIpbog4D1M75FOpoK6QbUOy5rNa3Q&usqp=CAU', position: 'ala', height: 1.80, years: 26, weight: 80, nation: 'franch'},
            {playerName: 'Ian', photoProfile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYG2HvFOIpbog4D1M75FOpoK6QbUOy5rNa3Q&usqp=CAU', position: 'ala', height: 1.80, years: 26, weight: 80, nation: 'franch'},
            {playerName: 'Arnau', photoProfile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYG2HvFOIpbog4D1M75FOpoK6QbUOy5rNa3Q&usqp=CAU', position: 'ala', height: 1.80, years: 26, weight: 80, nation: 'franch'}

        ])).status(200)
    })
}
