class playerController{
    #regExSqli = /[\t\r\n]|(--[^\r\n]*)|(\/\*[\w\W]*?(?=\*)\*\/)/gi; 
    #regExEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    #playerService = require("../../service/player/player.js");
    async addplayer(formSignIn){
        let form = JSON.parse(formSignIn);
        let err = [];

        if(form.name === '' || this.#regExSqli.test(form.name)){
            err.push(new Error('name not valid'))
        }
        if(!this.#regExEmail.test(form.email) || this.#regExSqli.test(form.email))
            err.push(new Error('email not valid'))

        if(form.password !== form.confirmPassword)
            err.push(new Error('confirm password and password is not same'))

        const isUniqueEmail = await this.existPlayer(form.email)
        if(isUniqueEmail.sucess && isUniqueEmail.data !== 0)
             err.push(new Error('email alredy use'))

        if(err.length > 0)
            return Promise.reject({
                sucess: false,
                data: err,
                code:  500
            })   
        return this.#playerService.createPlayer(form.email,form.name,form.password).then(doc=>{
            return { ...doc, code: 200, sucess: true };
        }).catch(err=>{
            return { ...err, code: 500, sucess: false }
        })
    }
    async existPlayer(email){
        try{
            let response = await this.#playerService.existPlayer(email)

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
module.exports = new playerController();