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
}

export default DatabaseMetodos;