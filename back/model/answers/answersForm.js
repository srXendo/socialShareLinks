const db = require('../db/db.js');
function getModel(model){
    const models = require('../models.js')
    return new models[model]();
}
class answersForm extends db{
    #model={
        id_answers: 'varchar(255) not null',
        id_form: 'varchar(255) not null'
    };
    #fk = [
        {   
            columnKey: 'id_answers',
            tableReference: getModel('answers').getTName(),
            idReference: getModel('answers').getPk()
        },
        {   
            columnKey: 'id_form',
            tableReference: getModel('form').getTName(),
            idReference: getModel('form').getPk()
        }
    ]
    constructor(){
        super('answersForm')
        this.setColumns(this.#model)
        this.setFk(this.#fk)
    }
}
module.exports = answersForm;