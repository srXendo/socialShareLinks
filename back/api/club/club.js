const { apiResponse, setSession } = require('../middleware/middleware')
class apiClub{
    #clubController = require('../../controller/player/club.js')
    constructor(){}
    start(app){
        console.log(new this.#clubController())
        app.post('/club/add', (req, res, next) => {
            req.responseController = new this.#clubController().addClub(req.rawBody)
            next() 
        }, apiResponse)
        app.post('/club/signup',(req, res, next)=>{
            req.responseController = new this.#clubController().authClub(req.rawBody)
            next()
        }, setSession)
        app.get('/club/getList', (req, res, next)=>{
            res.send(JSON.stringify([
                {NameClub: 'Alberto', photoProfile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYG2HvFOIpbog4D1M75FOpoK6QbUOy5rNa3Q&usqp=CAU', position: 'ala', height: 1.80, years: 30, weight: 80, nation: 'spain'},
                {NameClub: 'David', photoProfile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYG2HvFOIpbog4D1M75FOpoK6QbUOy5rNa3Q&usqp=CAU', position: 'ala', height: 1.80, years: 26, weight: 80, nation: 'franch'},
                {NameClub: 'Pol', photoProfile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYG2HvFOIpbog4D1M75FOpoK6QbUOy5rNa3Q&usqp=CAU', position: 'ala', height: 1.80, years: 26, weight: 80, nation: 'franch'},
                {NameClub: 'Marc', photoProfile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYG2HvFOIpbog4D1M75FOpoK6QbUOy5rNa3Q&usqp=CAU', position: 'ala', height: 1.80, years: 26, weight: 80, nation: 'franch'},
                {NameClub: 'Ian', photoProfile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYG2HvFOIpbog4D1M75FOpoK6QbUOy5rNa3Q&usqp=CAU', position: 'ala', height: 1.80, years: 26, weight: 80, nation: 'franch'},
                {NameClub: 'Arnau', photoProfile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYG2HvFOIpbog4D1M75FOpoK6QbUOy5rNa3Q&usqp=CAU', position: 'ala', height: 1.80, years: 26, weight: 80, nation: 'franch'}
    
            ])).status(200)
        })  
    }
}
module.exports = new apiClub();