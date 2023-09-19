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
    static buscar(query){

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
    static buscarPorId(query, id){
        return new Promise((resolve, reject)=>{
            Database.get(query, [id], (error, rows)=>{
                if(error){
                    reject(error)
                } else {
                    if(!rows){
                        reject({error: true, message: "Usuário não encontrado para o id"})
                    }
                    resolve(rows)
                }
            })
        })
    }

    /**
     * Método de deleção de dados específicos através de um identificador
     * @param {string} entidade 
     * @param {string} id 
     */
    static deletarPorId(query, id){
        return new Promise((resolve, reject)=>{
            Database.all(query, id, (error, rows)=>{
                if(error){
                    reject(error)
                } else {
                    resolve(rows)
                }
            })
        })
    }

    /**
     * Atualiza um registro específico na base de dados através de um identificador
     * @param {string} entidade 
     * @param {string} id 
     * @param {any} data 
     */
    static atualizarPorId(query, id, data){
        return new Promise((resolve, reject) => {
            Database.run(query, [...data, id], (error, rows) => {
                if(error){
                    reject(error)
                } else {
                    resolve(rows)
                }
            })
        })
    }
}

export default DAO;