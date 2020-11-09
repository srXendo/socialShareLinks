
module.exports = class userWrapperRoles{
    #model =  require('../../model/user/userWrapperRoles');
    constructor(){}
    async findByRefId(con, refId){
        let result =await new this.#model().select(con,'*', `id_user= '${refId}'`);
        return result[0]
    }    
}