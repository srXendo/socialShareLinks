
module.exports = class playerWrapperRoles{
    #model =  require('../../model/player/playerWrapperRoles');
    constructor(){}
    async findByRefId(con, refId){
        let result =await new this.#model().select(con,'*', `id_player= '${refId}'`);
        return result[0]
    }    
}