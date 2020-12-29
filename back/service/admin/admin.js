const adminModel = require('../../model/admin/admin.js')
const { getConnector } = require('../../libs/mysql.js');
const { v4 } = require('uuid');

class adminService{
    constructo(){}
    async getDataAdmin(email, password){
        try{

            let adminData = await this.findByEmailAndPassword(email, password);
            if(adminData){
                delete adminData.password;
                return adminData
            }else{
                return false
            }

        }catch(err){
            console.error(new Error(err.stack));
            return new Error(err)
        }
    }

    async findByEmailAndPassword(email,password){
        let doc = await getConnector();
        let con = doc.data
        let response = await new adminModel().select(con, '*', `email='${email}' AND password="MD5(${password})"`);
        console.log(response)
        return response[0];
    }
}
module.exports = new adminService();