const { join, dirname } = require('path');
const { getConnector } = require(join(dirname(__dirname)+'/libs/mysql.js'));
require(join(dirname(__dirname)+'/config/config.js'))
getConnector().then(doc=>{
    const con = doc.data;
    con.query(`drop DATABASE ${process.env.db_name}`, (error, results, fields)=>{
        
        
    })
}).catch(err=>{
    console.log(err)
    console.error(new Error(err.data.stack).stack);
});
