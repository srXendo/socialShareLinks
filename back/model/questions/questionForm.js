const db = require('../db/db.js');
function getModel(model){
    const models = require('../models.js')
    return new models[model]();
}
class questionForm extends db{
    #model={
        id_question: 'varchar(255) not null',
        id_form: 'varchar(255) not null'
    };
    #fk = [
        {   
            columnKey: 'id_question',
            tableReference: getModel('question').getTName(),
            idReference: getModel('answers').getPk()
        },
        {   
            columnKey: 'id_form',
            tableReference: getModel('form').getTName(),
            idReference: getModel('form').getPk()
        }
    ]
    constructor(){
        super('questionForm')
        this.setColumns(this.#model)
        this.setFk(this.#fk)
    }
}
module.exports = questionForm;