const playerModel = require('../../model/player/player.js')
const wrapperService = require('../wrapper/wrapper.js')
const { getConnector } = require('../../libs/mysql.js');
const playerWrapperRoles = require('../../model/player/playerWrapperRoles.js')
const { v4 } = require('uuid');
const roles = require('../../model/roles/roles.js');
class playerService{
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
    async getDataPlayer(email, password){
        try{
        let playerData = await this.findPlayerByEmailAndPassword(email, password);
        
        delete playerData.password;
        playerData['wrapper'] = await new wrapperService().getWrapperForId(playerData.id);
        //playerData['friends'] = await new friendsService().getFriendsForId(playerData.id);

        return playerData

        }catch(err){
            console.error(new Error(err.stack));
            return new Error(err)
        }
    }
    async existPlayer(email){
        const doc = await getConnector();
        let con = doc.data;
        return await new playerModel().select(con, 'count(*)', `email= '${email}'`);
    }
    async existdni(dni){
        let doc = await getConnector();
        let con = doc.data
        let response = await new playerModel().select(con, 'count(*)', `dni= '${dni}'`);
        console.log(response)
        return response[0];
    }
    async findPlayerByEmailAndPassword(email,password){
        let doc = await getConnector();
        let con = doc.data
        let response = await new playerModel().select(con, '*', `email='${email}' AND password="MD5(${password})"`);
        console.log(response)
        return response[0];
    }
    async createPlayer(email, name, password, cif, lastNames){
        return new Promise(async (resolve, reject)=>{     
            const doc = await getConnector();
            let con = doc.data;
            const id_player = v4();
            const id_wrapper = v4();
            const id_role = v4();
            try{
                con.beginTransaction(()=>{
                    new playerModel().insert(con,id_player, name, lastNames, cif, email, `MD5(${password})`)
                        .then(()=>{
                            return new wrapperService().createWrapper(con, id_wrapper, '/', 'folder')
                        }).then(()=>{
                            return new roles().insert(con, id_role, 'rw')
                        }).then(()=>{
                            return new playerWrapperRoles().insert(con, id_player, id_wrapper, id_role)
                        }).then(()=>{     
                            con.commit((err)=>{
                                if(err) throw new Error(err);
                                resolve( {sucess: true, data: id_player})
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
module.exports = new playerService();