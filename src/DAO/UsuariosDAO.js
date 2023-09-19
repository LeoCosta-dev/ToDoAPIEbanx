import UsuariosModel from "../models/UsuariosModel.js";
import DAO from "./DAO.js";


class UsuariosDAO extends DAO{
    /**
     * Método de inserção de dados da tabela Usuários
     * @param {UsuariosModel} data 
     */
    static async inserirUsuario(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO USUARIOS (NOME, EMAIL, TELEFONE) VALUES (?,?,?)
        `
        const result = await this.inserir(query, dataValues)
        return result
    }

    /**
     * Método que retorna todos os registros da tabela Usuários
     * @returns {Array<UsuariosModel>}
     */
    static async buscarTodosOsUsuarios(){
        const query = `
        SELECT * FROM USUARIOS;
        `
        return await this.buscar(query)
    }

    /**
     * Método de busca de registros específicos na tabela Usuários através de um identificador
     * @param {string} id 
     * @returns {UsuariosModel}
     */
    static async buscarUsuarioPorId(id){
        const query = `
        SELECT * FROM USUARIOS where ID = ?;
        `
            try {
                const response = await this.buscarPorId(query, id)
                return response
            } catch (error) {
                throw error
            }

    }

    /**
     * Método de deleção de registros específicos na tabela Usuários através de um identificador
     * @param {string} id 
     */
    static async deletarUsuarioPorId(id){
        const query = "DELETE FROM USUARIOS WHERE ID = ?"
        try {
            await this.deletarPorId(query, id)
        } catch (error) {
            throw error
        }

    }

    /**
     * Atualiza um registro específico da tabela Usuários através de um identificador
     * @param {string} id 
     * @param {any} data 
     */
    static async AtualizarUsuarioPorId(id, data){
        const query = "UPDATE USUARIOS SET (ID, NOME, EMAIL, TELEFONE) = (?,?,?,?) WHERE ID = ?"
        const values = Object.values(data)
        try {            
            await this.atualizarPorId(query, id, [id ,...values])
        } catch (error) {
            throw error
        }
    }
}

export default UsuariosDAO;
