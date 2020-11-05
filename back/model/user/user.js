const {join, dirname} = require('path')
const { getConnector } = require(join(dirname(__dirname)+'/../libs/mysql.js'));
const db = require('../db/db.js')
const { v4 } = require('uuid');
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

        }
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
            con.beginTransaction(async()=>{
                try{

                    await this.#db.insert(con,[id_user, name, email, `MD5(${password})`])
                    con.commit((err)=>{console.log('commit',err)})
                    resolve({sucess: true, data: {'oooooook':'v2'}, code:200})      
                }catch(err){

                    con.rollback(()=>{console.log('rollback!!!')})
                    reject(err)
                }
            });

        })
    }
} 