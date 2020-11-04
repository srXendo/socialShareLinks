class userController{
    async addUser(formSignIn){
        console.log(formSignIn)
        return Promise.reject({
            sucess: false,
            data: new Error('not logic'),
            code: 500
        });
    }
}
module.exports.addUser = formSignIn => new userController().addUser(formSignIn);