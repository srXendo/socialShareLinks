const wrapperModel = require('../../model/wrapper/wrapper.js')
const roles = require('../../service/roles/roles.js');
const container = require('../../model/container/container.js');
const userWrapperRolesService = require('../../service/roles/roles.js');
const wrapperContainer = require('../../service/wrapper/wrapperContainer.js');
let {join, dirname} = require('path');
const {v4} = require('uuid')
const { getConnector } = require(join(dirname(__dirname)+'/../libs/mysql.js'));

module.exports = class wrapperService{

    constructor(){

    }
    async getWrapperForId(id){
        try{
            let doc = await getConnector()
            let con = doc.data
        
            let dataUserWrapperRoles = await new userWrapperRolesService().findByRefId(con, id);
            let dataWrapper = await this.findById(con, dataUserWrapperRoles.id_wrapper);
            let dataRole = await new roles().findRoles(con, dataUserWrapperRoles.id_role)
            let dataWrapperContainer = await new wrapperContainer().findContainerByIdWrapper(con, dataWrapper.id);
            let dataContainer = await new container().findById(con, dataWrapperContainer.id_container);
            
            dataWrapper['container'] = dataContainer;
            dataWrapper['role'] = dataRole.name;

            return dataWrapper;
        }catch(err){
            console.error(new Error(err.stack));
        }
         
    }
    async findById(con, id_wrapper){
        let result = await new wrapperModel().findById(con, id_wrapper);
        console.log('fin in',result)
        return result
    }
    createWrapper(con, id, name, type){
        const id_container = v4();
        return new container().insert(con, id_container, "[]").then(()=>{
            return new wrapperModel().insert(con, id, name, type);
        }).then(()=>{
            return new wrapperContainer().insert(con, id, id_container)
        })
    }
}