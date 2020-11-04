const { join, dirname } = require('path');
const { getConnector } = require(join(dirname(__dirname)+'/libs/mysql.js'));
require(join(dirname(__dirname)+'/config/config.js'))
getConnector().then(doc=>{
    const con = doc.data;
    con.query(`START TRANSACTION`, (error, results, fields)=>{
        if (error) console.error(new Error(error));
        con.query(`create table ${process.env.db_name}.User(id VARCHAR(255) NOT NULL, name varchar(255) NOT NULL, email varchar(255) NOT NULL, password varchar(255) NOT NULL, primary key(id));`,
            (error, results, fields)=>{
                if (error) console.error(new Error(error));

            })
        con.query(`create table ${process.env.db_name}.UserFriend(id_user varchar(255), id_friend varchar(255), FOREIGN KEY (id_user) REFERENCES User(id),FOREIGN KEY (id_friend) REFERENCES User(id))`,
            (err,result,fields)=>{
                if (err) console.error(new Error(err));
            })    
    })
}).catch(err=>{
    console.log(err)
    console.error(new Error(err.data.stack).stack);
});
