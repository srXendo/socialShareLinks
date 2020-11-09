module.exports = class wrapperContainer{
    #model = require('../../model/wrapper/wrapperContainer.js');
    constructor(){}
    async findContainerByIdWrapper(con, id_wrapper){
        let result = await new this.#model().select(con,'*',`id_wrapper='${id_wrapper}'`);
        return result[0];
    }
}