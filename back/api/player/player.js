
const { apiResponse, setSession } = require('../middleware/middleware')
class apiPlayer{
    #playerController = require('../../controller/player/player.js')
    constructor(){}
    start(app){
        app.post('/player/add', (req, res, next) => {
            req.responseController = this.#playerController.addPlayer(req.rawBody)
            next() 
        }, apiResponse)
        app.post('/player/signup',(req, res, next)=>{
            req.responseController = this.#playerController.authPlayer(req.rawBody)
            next()
        }, setSession)
        app.get('/player/getList', (req, res, next)=>{
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
}
module.exports = new apiPlayer();