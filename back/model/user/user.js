const {join, dirname} = require('path')
const { getConnector } = require(join(dirname(__dirname)+'/../libs/mysql.js'));
const db = require('../db/db.js');
const wrapper = require('../wrapper/wrapper.js');
const userWrapperRoles = require('./userWrapperRoles.js')
const { v4 } = require('uuid');
const roles = require('../roles/roles.js');

module.exports = class userModel extends db{

    #model={
        id: '',
        email: '',
        password: '',
        wrapper: {
            id:'',
            type: 'folder',
            roles: 'rw',
            name: '/',
            container: {
                id: '',
                content:[]|''|{}
            }

        } | wrapper
    }
    constructor(){
        super('users');
        this.setColumns( ['id','name','email','password'])
    }
} 