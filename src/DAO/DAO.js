import Database from "../database/Database.js";

class DAO{
    /**
     * Método de inserção de dados
     * @param {string} query 
     * @param {Array<any>} data 
     */
    static inserir(query, data){
        return new Promise((resolve, reject)=>{
            Database.run(query, data, (error)=>{
                if(error){
                    console.log(error)
                    reject(error)
                }
                resolve({error:false})
            })
        })
    }

    /**
     * Método de busca de dados
     * @param {string} entidade 
     * @returns {any}
     */
    static buscar(entidade){
        const query = `
        SELECT * FROM ${entidade};
        `
        return new Promise((resolve, reject)=>{
            Database.all(query, (error, rows)=>{
                if(error){
                    console.log(error)
                } else {
                    resolve(rows)
                }
            })
        })
    }

    /**
     * Método de busca de dados específicos através de um identificador
     * @param {string} entidade 
     * @param {string} id 
     * @returns {any}
     */
    static buscarPorId(entidade, id){
        return Database[entidade][id]
    }

    /**
     * Método de deleção de dados específicos através de um identificador
     * @param {string} entidade 
     * @param {string} id 
     */
    static deletarPorId(entidade, id){
        delete Database[entidade][id]
    }

    /**
     * Atualiza um registro específico na base de dados através de um identificador
     * @param {string} entidade 
     * @param {string} id 
     * @param {any} data 
     */
    static atualizarPorId(entidade, id, data){
        Database[entidade][id] = data
    }
}

export default DAO;