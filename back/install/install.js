const { join, dirname } = require('path');
const { getConnector } = require(join(dirname(__dirname)+'/libs/mysql.js'));
require(join(dirname(__dirname)+'/config/config.js'))
getConnector().then(doc=>{
    const con = doc.data;
    con.query(`create DATABASE ${process.env.db_name}`, (error, results, fields)=>{
        if (error) console.error(new Error(error));
        con.query(`create table ${process.env.db_name}.Users(id VARCHAR(255) NOT NULL, name varchar(255) NOT NULL, email varchar(255) NOT NULL, password varchar(255) NOT NULL, primary key(id));`,
            (error, results, fields)=>{
                if (error) console.error(new Error(error));
                con.query(`create table ${process.env.db_name}.UsersFriends(id_user varchar(255), id_friend varchar(255), FOREIGN KEY (id_user) REFERENCES Users(id),FOREIGN KEY (id_friend) REFERENCES Users(id))`,
                (err,result,fields)=>{
                    if (err) console.error(new Error(err));
                })
                
            })
        con.query(`create table ${process.env.db_name}.Wrappers(id varchar(255), name varchar(255), type varchar(255), primary key(id))`,
        (err,result,fields)=>{
            if (err) console.error(new Error(err));
            con.query(`create table ${process.env.db_name}.Containers(id varchar(255), content TEXT, primary key(id))`,
            (err,result,fields)=>{
                if (err) console.error(new Error(err));
                con.query(`create table ${process.env.db_name}.WrappersContainers(id_wrapper varchar(255), id_container varchar(255), FOREIGN KEY (id_wrapper) REFERENCES Wrappers(id) ,FOREIGN KEY (id_container) REFERENCES Containers(id))`,
                (err,result,fields)=>{
                    if (err) console.error(new Error(err));
                    console.log('end')
                })
            })
        })
        con.query(`create table ${process.env.db_name}.roles(id varchar(255), name varchar(255), primary key(id))`,
        (err,result,fields)=>{
            if (err) console.error(new Error(err));
            con.query(`create table ${process.env.db_name}.usersWrappersRoles(id_user varchar(255), id_wrapper varchar(255), id_role varchar(255),FOREIGN KEY (id_user) REFERENCES users(id), FOREIGN KEY (id_role) REFERENCES roles(id) ,FOREIGN KEY (id_wrapper) REFERENCES Wrappers(id))`,
            (err,result,fields)=>{
                if (err) console.error(new Error(err));
                console.log('end')
            })
        })
    })
}).catch(err=>{
    console.log(err)
    console.error(new Error(err.data.stack).stack);
});
