require('../config/config.js');
const { join, dirname } = require('path');
const { getConnector } = require(join(dirname(__dirname)+'/libs/mysql.js'));
const models = require('../model/models.js')
console.log(models)
getConnector().then(async doc=>{
    const con = doc.data;
    con.query(`create DATABASE ${process.env.db_name}`, (error, results, fields)=>{
        let modelsLate = [];
        let arrPromises = [];
        for(let key in models){
            console.log('read model: ',models[key])
            let model = new models[key]();
            console.log('condition: ', model.getFk().length !== 0)
            if(model.getFk().length !== 0)
                modelsLate.push(model)
            else
                arrPromises.push(new models[key]().insertTable(con));
        }
        return Promise.all(arrPromises).then(fast=>{
            let arrSecondStage = []
            for(let model of modelsLate){
                arrSecondStage.push(model.insertTable(con));
            }
            return Promise.all(arrSecondStage).then(fast2=>{
                console.log('sucessfull install db!!!')
                return
            }).catch(err=>{
                console.error(new Error(err.stack));
                console.log('error install')
                return
                
            })
        }).catch(err=>{
            console.error(new Error(err.stack));
            console.log('error install')
            return
            
        })        
    })   
}).catch(err=>{
    console.log(err)
    console.error(new Error(err.data.stack).stack);
});
