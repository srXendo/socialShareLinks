
module.exports = class playerAnswerRoles{
    #model =  require('../../model/player/playerAnswersRoles');
    constructor(){}
    async findByRefId(con, refId){
        let result = await new this.#model().select(con,'*', `id_player= '${refId}'`);
        return result[0]
    }
    async insert(con, id_player, id_role, id_answer){
        return new this.#model().insert(con, id_player, id_answer, id_role)
    }  
}