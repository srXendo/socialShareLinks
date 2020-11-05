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
    async signUp(email,name,password){

    }
    async insert(email, name, password){
        return new Promise(async(resolve, reject) => {
            const doc = await getConnector();
            let con = doc.data;
            const id_user = v4();
            const id_wrapper = v4();
            const id_role = v4();
            con.beginTransaction(async()=>{
                try{
                    this.#db.insert(con,[id_user, name, email, `MD5(${password})`])
                     .then(()=>{
                        return new wrapper().insert(con, id_wrapper, '/', 'folder')
                     }).then(()=>{
                        return new roles().insert(con, id_role, 'rw')
                     }).then(()=>{
                         return new userWrapperRoles().insert(con, id_user, id_wrapper, id_role)
                     }).then(()=>{
                        con.commit((err)=>{console.log('commit',err)})
                        resolve({sucess: true, data: {'oooooook':'v2'}, code:200})
                       
                     }).catch((err)=>{
                        console.error(err);
                        reject()
                     })
                    //
                          
                }catch(err){
                    con.rollback(()=>{console.log('rollback!!!')})
                    console.error()
                    reject(err)
                }
            });

        })
    }


} 