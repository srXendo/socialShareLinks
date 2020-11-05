const {join, dirname} = require('path')
const { getConnector } = require(join(dirname(__dirname)+'/../libs/mysql.js'));
const db = require('../db/db.js');
const wrapper = require('../wrapper/wrapper.js');
const userWrapperRoles = require('./userWrapperRoles.js')
const { v4 } = require('uuid');
const roles = require('../roles/roles.js');

module.exports = class userModel{
    #db;
    #model={
        id: '',
        email: '',
        password: '',
        wrapper: {
            id:'',
            type: 'folder',
            roles: 'rw',
            name: '/',
            container: {
                id: '',
                content:[]|''|{}
            }

        } | wrapper
    }
    constructor(){
        this.#db = new db('users',['id','name','email','password']); 
    }
    async existUser(email){
        const doc = await getConnector();
        let con = doc.data;
        
        
        return await this.#db.select(con, 'count(*)', `email= '${email}'`);
    }
    async insert(email, name, password){
        return new Promise(async (resolve, reject)=>{     
            const doc = await getConnector();
            let con = doc.data;
            const id_user = v4();
            const id_wrapper = v4();
            const id_role = v4();
            try{
                con.beginTransaction(()=>{
                    this.#db.insert(con,[id_user, name, email, `MD5(${password})`])
                        .then(()=>{
                            return new wrapper().insert(con, id_wrapper, '/', 'folder')
                        }).then(()=>{
                            return new roles().insert(con, id_role, 'rw')
                        }).then(()=>{
                            return new userWrapperRoles().insert(con, id_user, id_wrapper, id_role)
                        }).then(()=>{     
                            con.commit((err)=>{
                                if(err) throw new Error(err);
                                resolve( {sucess: true, data: id_user})
                            })
                        }).catch((err)=>{
                            console.error(err);
                            con.rollback(()=>{
                                console.log('rollback!!!');
                                reject({sucess: false, data: new Error(err)})
                            });    
                        })
                })
            }catch(err){
                con.rollback(()=>{
                    console.log('rollback!!!')
                    reject(err);
                });
            }
        })
    }
} 