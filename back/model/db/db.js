module.exports = class db{
    #table= ''
    #columns= []
    #columnsTyped= []
    constructor(tName, columns, columnsTyped){
        this.#table = tName

        this.#columnsTyped = columnsTyped
    }
    setColumns(columns){
        this.#columns = columns
    }
    insert(con, ...arrValues){
        return new Promise((resolve,reject)=>{

            con.query(`insert into ${process.env.db_name}.${this.#table}(${this.#columns.join(',')}) VALUES (${arrValues.map(i=>`'${i}'`).join(',')})`,
            (err,result,fields)=>{
               if(err) reject({sucess: false, data: new Error(err)});
                resolve(result)
            })
        })
    }
    select(con, selector, condition){
        return new Promise((resolve,reject)=>{
            console.log(con.query)
            con.query(`SELECT ${selector} FROM ${process.env.db_name}.${this.#table} WHERE ${condition}`,(err,result, fields)=>{
                if(err) reject(err);
                console.log(`SELECT ${selector} FROM ${process.env.db_name}.${this.#table} WHERE ${condition}`)
                resolve(result);
            })
        })
    }
    async findById(con, id){
        let result =  await this.select(con, '*', `id='${id}'`);
        return result[0];
    }
}