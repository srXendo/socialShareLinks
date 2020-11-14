class playerController{
    #regExSqli = /[\t\r\n]|(--[^\r\n]*)|(\/\*[\w\W]*?(?=\*)\*\/)/gi; 
    #regExEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    #DNI_REGEX = /^(\d{8})([A-Z])$/;
    #CIF_REGEX = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/;
    #NIE_REGEX = /^[XYZ]\d{7,8}[A-Z]$/;
    #playerService = require("../../service/player/player.js");
    async addPlayer(formSignIn){
        let form = JSON.parse(formSignIn);
        let err = [];

        if(form.name === '' || this.#regExSqli.test(form.name)){
            err.push(new Error('name not valid'))
        }
        if(form.lastNames === '' || this.#regExSqli.test(form.lastNames)){
            err.push(new Error('lastNames not valid'))
        }
        if(!this.#regExEmail.test(form.email) || this.#regExSqli.test(form.email))
            err.push(new Error('email not valid'))

        if(form.password !== form.confirmPassword)
            err.push(new Error('confirm password and password is not same'))
            
        if(form.dni === '' || this.#regExSqli.test(form.dni) || (!this.#DNI_REGEX.test(form.dni) && !this.#CIF_REGEX.test(form.dni) && !this.#NIE_REGEX.test(form.dni))){
            err.push(new Error('dni not valid'))
        }
        const isUniquedni = await this.existdni(form.dni)
        if(isUniquedni.sucess && isUniquedni.data !== 0)
            err.push(new Error('dni already use'))

        const isUniqueEmail = await this.existPlayer(form.email)
        if(isUniqueEmail.sucess && isUniqueEmail.data !== 0)
            err.push(new Error('email alredy use'))

        console.log('how email',isUniqueEmail)
        if(err.length > 0)
            return Promise.reject({
                sucess: false,
                data: err,
                code:  500
            })   
        return this.#playerService.createPlayer(form.email, form.name, form.password, form.dni, form.lastNames).then(doc=>{
            return { ...doc, code: 200, sucess: true };
        }).catch(err=>{
            return { ...err, code: 500, sucess: false }
        })
    }
    async existdni(dni){
        try{
            let response = await this.#playerService.existdni(dni)

            let result = {
                sucess: true,
                code: 200,
                data: response['count(*)']
            }
            return result;
        }catch(err){
            return Promise.reject({data:new Error(err),code:500, sucess: true })
        } 
    }
    async existPlayer(email){
        try{
            let response = await this.#playerService.existPlayer(email)
            console.log('response', response)
            let result = {
                sucess: true,
                code: 200,
                data: response[0]['count(*)']
            }
            return result;
        }catch(err){
            return Promise.reject({data:new Error(err),code:500, sucess: true })
        }  
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
        return this.#playerService.getDataPser(form.email,form.password).then(doc=>{
            return { data: doc, code: 200, sucess: true };
        }).catch(err=>{
            return { ...err, code: 500, sucess: false }
        })
    }
}
module.exports = playerController;