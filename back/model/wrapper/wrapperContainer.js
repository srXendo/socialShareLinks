const db = require('../db/db.js');
const { v4 } = require('uuid');

module.exports = class wrapperContainer extends db{
    #model={
        id_wrapper:'',
        id_container: '',
        
    };
    constructor(){
        super('WrappersContainers');
        this.setColumns( [...Object.keys(this.#model)])
    }
}