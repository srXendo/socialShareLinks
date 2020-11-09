const db = require('../db/db.js');
const container = require('../container/container.js');
const wrapperContainer = require('./wrapperContainer.js');
const { v4 } = require('uuid');
module.exports = class wrapper extends db{
    #model={
        id:'',
        name: '',
        type: 'folder' | 'link'
    };
    model={
        name: '',
        type: 'folder' | 'link',
        container: {}
    }
    
    constructor(){
        super('Wrappers');
        this.setColumns([...Object.keys(this.#model)])
    }
    


}