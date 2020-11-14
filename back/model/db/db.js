module.exports = class db{
    #table= ''
    #columns= []
    #pk;
    #fk;
    constructor(tName){
        this.#table = tName
    }
    getTName(){
        return this.#table;
    }
    setColumns(columns){
        this.#columns = columns
    }
    setPk(pk){
        this.#pk = pk
    }
    setFk(fk){
        this.#fk = fk   
    }
    getColumnsName(){
        return [...Object.keys(this.#columns)]
    }
    getQueryColumnsTyped(){
        let res = [];
        for(let columnName in this.#columns){
            res.push(`${columnName} ${this.#columns[columnName]}`)
        }
        return res
    }
    getPk(){
        if(this.#pk)
            return `${this.#pk}`;
        return ''    
    }

    getQueryPk(){
        if(this.getPk() !== '')
            return ` PRIMARY KEY (${this.getPk()})`;
        
        return ''
    }
    getFk(){
        if(!this.#fk){
            return []
        }
        let response = [];
        for(let row of this.#fk){
            response.push(`FOREIGN KEY (${row.columnKey}) REFERENCES ${row.tableReference}(${row.idReference})`)
        }
        return response
    }
    insertTable(con){
        return new Promise((resolve, reject)=>{
            con.query(`CREATE TABLE ${process.env.db_name}.${this.#table}(${this.getQueryColumnsTyped().join(',')},${this.getQueryPk()} ${this.getFk().join(',')});`,(error, results, fields)=>{
                if(error){
                    console.error(error);
                    reject(error)
                }
                resolve(results)
            })
        })
    }
    
    insert(con, ...arrValues){
        return new Promise((resolve,reject)=>{
            con.query(`insert into ${process.env.db_name}.${this.#table}(${this.getColumnsName().join(',')}) VALUES (${arrValues.map(i=>`'${i}'`).join(',')})`,
            (err,result,fields)=>{
               if(err) reject({sucess: false, data: new Error(err)});
                resolve(result)
            })
        })
    }
    select(con, selector, condition){
        return new Promise((resolve,reject)=>{
            con.query(`SELECT ${selector} FROM ${process.env.db_name}.${this.#table} WHERE ${condition}`,(err,result, fields)=>{
                if(err) reject(err);
                resolve(result);
            })
        })
    }
    async findById(con, id){
        let result =  await this.select(con, '*', `id='${id}'`);
        return result[0];
    }
}