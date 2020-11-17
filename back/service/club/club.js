const clubModel = require('../../model/club/club.js')
const wrapperService = require('../wrapper/wrapper.js')
const { getConnector } = require('../../libs/mysql.js');
const clubWrapperRoles = require('../../model/club/clubWrapperRoles.js')
const { v4 } = require('uuid');
const roles = require('../../model/roles/roles.js');
class clubService{
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
    async getDataClub(email, password){
        try{

            let clubData = await this.findClubByEmailAndPassword(email, password);
            if(clubData){
                delete clubData.password;
                clubData['wrapper'] = await new wrapperService().getWrapperForId(clubData.id);
                return clubData
            }else{
                return false
            }

        }catch(err){
            console.error(new Error(err.stack));
            return new Error(err)
        }
    }
    async existClub(email){
        const doc = await getConnector();
        let con = doc.data;
        return await new clubModel().select(con, 'count(*)', `email= '${email}'`);
    }
    async existcif(dni){
        let doc = await getConnector();
        let con = doc.data
        let response = await new clubModel().select(con, 'count(*)', `dni= '${dni}'`);
        console.log(response)
        return response[0];
    }
    async findClubByEmailAndPassword(email,password){
        let doc = await getConnector();
        let con = doc.data
        let response = await new clubModel().select(con, '*', `email='${email}' AND password="MD5(${password})"`);
        console.log(response)
        return response[0];
    }
    async createClub(email, name, password, cif, lastNames){
        return new Promise(async (resolve, reject)=>{     
            const doc = await getConnector();
            let con = doc.data;
            const id_club = v4();
            const id_wrapper = v4();
            const id_role = v4();
            try{
                con.beginTransaction(()=>{
                    new clubModel().insert(con,id_club, name, lastNames, cif, email, `MD5(${password})`)
                        .then(()=>{
                            return new wrapperService().createWrapper(con, id_wrapper, '/', 'folder')
                        }).then(()=>{
                            return new roles().insert(con, id_role, 'rw')
                        }).then(()=>{
                            return new clubWrapperRoles().insert(con, id_club, id_wrapper, id_role)
                        }).then(()=>{     
                            con.commit((err)=>{
                                if(err) throw new Error(err);
                                resolve( {sucess: true, data: id_club})
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
module.exports = new clubService();