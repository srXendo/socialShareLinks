const userModel = require('../../model/user/user.js')
const wrapperService = require('../wrapper/wrapper.js')
const {join, dirname} = require('path')
const { getConnector } = require('../../libs/mysql.js');
const db = require('../../model/db/db.js');
const wrapper = require('../../model/wrapper/wrapper.js');
const userWrapperRoles = require('../../model/user/userWrapperRoles.js')
const { v4 } = require('uuid');
const roles = require('../../model/roles/roles.js');
class userService{
    #public={
        name: '',
        friends: undefined,
        wrapper:{
            name: '/',
            role: 'rw',
            type: 'folder',
            container: {
                content: []
            }
        }
    }
    #private={
        id: '',
        friends: undefined,
        wrapper: {
            id: '',
            name: '/',
            role: {
                id: '',
                name: ''
            },
            type: 'folder',
            container: {
                id: '',
                content: []
            }
        }
    }
    constructo(){}
    async getDataUser(email, password){
        try{
        let userData = await this.findUserByEmailAndPassword(email, password);
        console.log(userData)
        delete userData.password;
        userData['wrapper'] = await new wrapperService().getWrapperForId(userData.id);
        //userData['friends'] = await new friendsService().getFriendsForId(userData.id);

        return userData

        }catch(err){
            console.error(new Error(err.stack));
            return new Error(err)
        }
    }
    async existUser(email){
        const doc = await getConnector();
        let con = doc.data;
        return await new userModel().select(con, 'count(*)', `email= '${email}'`);
    }
    
    async findUserByEmailAndPassword(email,password){
        let doc = await getConnector();
        let con = doc.data
        let response = await new userModel().select(con, '*', `email='${email}' AND password="MD5(${password})"`);
        console.log(response)
        return response[0];
    }
    async createUser(email, name, password){
        return new Promise(async (resolve, reject)=>{     
            const doc = await getConnector();
            let con = doc.data;
            const id_user = v4();
            const id_wrapper = v4();
            const id_role = v4();
            try{
                con.beginTransaction(()=>{
                    new userModel().insert(con,id_user, name, email, `MD5(${password})`)
                        .then(()=>{
                            return new wrapperService().createWrapper(con, id_wrapper, '/', 'folder')
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
                                console.error(err)
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
module.exports = new userService();