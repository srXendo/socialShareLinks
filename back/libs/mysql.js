module.exports.getConnector = async function(){
    return new Promise((resolve, reject)=>{
        let mysql= require('mysql');
        const connection =  mysql.createConnection(
            {
                host     : process.env.db_host,
                user     : process.env.db_user,
                password : process.env.db_password
            }
        );
        connection.connect(function(err) {
            if (err) {
                console.error(new Error('error connecting: ' + err.stack));
                reject({
                    sucess: false,
                    data: new Error('no connected')
                });
            }
        
            resolve({
                sucess: true,
                data: connection
            })
        });
    })
}