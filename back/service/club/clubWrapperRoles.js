
module.exports = class playerAnswerRoles{
    #model =  require('../../model/player/playerAnswerRoles');
    constructor(){}
    async findByRefId(con, refId){
        let result =await new this.#model().select(con,'*', `id_player= '${refId}'`);
        return result[0]
    }    
}