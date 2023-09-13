import UsuariosModel from "../models/UsuariosModel.js";
import DAO from "./DAO.js";

const USUARIOS_TABELA = "USUARIOS"

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
        return await this.buscar(USUARIOS_TABELA)
    }

    /**
     * Método de busca de registros específicos na tabela Usuários através de um identificador
     * @param {string} id 
     * @returns {UsuariosModel}
     */
    static buscarUsuarioPorId(id){
        return this.buscarPorId(USUARIOS_TABELA, id)
    }

    /**
     * Método de deleção de registros específicos na tabela Usuários através de um identificador
     * @param {string} id 
     */
    static deletarUsuarioPorId(id){
        this.deletarPorId(USUARIOS_TABELA, id)
    }

    /**
     * Atualiza um registro específico da tabela Usuários através de um identificador
     * @param {string} id 
     * @param {any} data 
     */
    static AtualizarUsuarioPorId(id, data){
        this.atualizarPorId(USUARIOS_TABELA, id, data)
    }
}

export default UsuariosDAO;