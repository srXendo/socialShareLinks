class userController{
    async addUser(formSignIn){
        let form = JSON.parse(formSignIn);
        let data = [];
        let code = 500;
        let sucess = false;
        if(form.name === '' || /[\t\r\n]|(--[^\r\n]*)|(\/\*[\w\W]*?(?=\*)\*\/)/gi.test(form.name)){
            data.push(new Error('name not valid'))
        }
        if(!/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g.test(form.email) || /[\t\r\n]|(--[^\r\n]*)|(\/\*[\w\W]*?(?=\*)\*\/)/gi.test(form.email))
            data.push(new Error('email not valid'))

        if(form.password !== form.confirmPassword || /[\t\r\n]|(--[^\r\n]*)|(\/\*[\w\W]*?(?=\*)\*\/)/gi.test(form.password) && /[\t\r\n]|(--[^\r\n]*)|(\/\*[\w\W]*?(?=\*)\*\/)/gi.test(form.confirmPassword))
            data.push(new Error('confirm password and password is not same'))

        return Promise.reject({
            sucess: sucess,
            data: data,
            code: code
        });
    }
}
module.exports.addUser = formSignIn => new userController().addUser(formSignIn);