import Database from "../database/Database.js";

class DatabaseMetodos{
    /**
     * Método de inserção de dados
     * @param {string} entidade 
     * @param {*} data 
     */
    static inserir(entidade, data){
        Database[entidade].push(data)
    }

    /**
     * Método de busca de dados
     * @param {string} entidade 
     * @returns {any}
     */
    static buscar(entidade){
        return Database[entidade]
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

export default DatabaseMetodos;