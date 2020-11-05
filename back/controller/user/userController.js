const userModel = require("../../model/user/user");

class userController{
    async addUser(formSignIn){
        let form = JSON.parse(formSignIn);
        let err = [];
        let code = 500;
        let sucess = false;
        if(form.name === '' || /[\t\r\n]|(--[^\r\n]*)|(\/\*[\w\W]*?(?=\*)\*\/)/gi.test(form.name)){
            err.push(new Error('name not valid'))
        }
        if(!/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g.test(form.email) || /[\t\r\n]|(--[^\r\n]*)|(\/\*[\w\W]*?(?=\*)\*\/)/gi.test(form.email))
            err.push(new Error('email not valid'))

        if(form.password !== form.confirmPassword)
            err.push(new Error('confirm password and password is not same'))
        const isUniqueEmail = await this.findByEmail(form.email)
        if(isUniqueEmail.sucess && isUniqueEmail.data !== 0)
            return Promise.resolve({
                sucess: true,
                data: 'userEmail exist',
                code: 200
            })    
        if(err.length > 0)
            return Promise.reject({
                sucess: sucess,
                data: err,
                code: code
            });

        return new userModel().insert(form.email,form.name,form.password).then(doc=>{
            return { ...doc, code: 200 };
        }).catch(err=>{
            return { ...err, code: 500}
        })
    }
    async findByEmail(email){
        try{
            let response = await new userModel().existUser(email)

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
}
module.exports.addUser = formSignIn => new userController().addUser(formSignIn);