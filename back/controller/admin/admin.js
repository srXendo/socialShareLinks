class adminController{
    #regExSqli = /[\t\r\n]|(--[^\r\n]*)|(\/\*[\w\W]*?(?=\*)\*\/)/gi; 
    #regExEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    #DNI_REGEX = /^(\d{8})([A-Z])$/;
    #CIF_REGEX = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/;
    #NIE_REGEX = /^[XYZ]\d{7,8}[A-Z]$/;
    #adminService = require("../../service/admin/admin.js");
    constructor () {
    }
    async authPlayer(formLogIn){

        let form = JSON.parse(formLogIn);
       
        let err = [];
        const response = !this.#regExEmail.test(form.email)
        if(response){
            err.push(new Error('email not valid'),form.email)
        }
              
        if(err.length > 0)
            return Promise.reject({
                sucess: false,
                data: err,
                code:  500
            })   
        return this.#adminService.getDataAdmin(form.email, form.password).then(doc=>{
            if(doc)
                return { data: doc, code: 200, sucess: true };
            else
                return {data: 'not find email or password', code: 404, sucess: false }    
        }).catch(err=>{
            return { ...err, code: 500, sucess: false }
        })
    }
}
module.exports = adminController;