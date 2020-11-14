const db = require('../db/db.js');
function getModel(model){
    const models = require('../models.js')
    console.log(new models[model]().getTName())
    return new models[model]();
}
class wrapperContainer extends db{
    #model={
        id_wrapper: 'varchar(255) not null',
        id_container: 'varchar(255) not null',
    };
    #fk = [
        {   
            columnKey: 'id_wrapper',
            tableReference:getModel('wrapper').getTName(),
            idReference: getModel('wrapper').getPk()
        },
        {   
            columnKey: 'id_container',
            tableReference:getModel('container').getTName(),
            idReference: getModel('container').getPk()
        }
    ]
    constructor(){
        super('wrapperscontainers');
        this.setColumns( this.#model)
        this.setFk(this.#fk)
    }
}
module.exports = wrapperContainer