module.exports = class db{
    #table= ''
    #columns= []
    #columnsTyped= []
    constructor(tName, columns, columnsTyped){
        this.#table = tName
        this.#columns = columns
        this.#columnsTyped = columnsTyped
    }
    insert(con, values){
        return new Promise((resolve,reject)=>{
            con.query(`insert into ${process.env.db_name}.${this.#table}(${this.#columns.join(',')}) VALUES (${values.map(i=>'"'+i+'"').join(',')})`,
            (err,result,fields)=>{
                if(err) reject({sucess: false, data: new Error(err)});
                resolve(result)
            })
        })
    }
}