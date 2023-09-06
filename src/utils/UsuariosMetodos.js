import UsuariosModel from "../models/UsuariosModel.js";
import DatabaseMetodos from "./DatabaseMetodos.js";

const USUARIOS_TABELA = "Usuarios"

class UsuariosMetodos extends DatabaseMetodos{
    /**
     * Método de inserção de dados da tabela Usuários
     * @param {UsuariosModel} data 
     */
    static inserirUsuario(data){
        this.inserir(USUARIOS_TABELA, data)
    }

    /**
     * Método que retorna todos os registros da tabela Usuários
     * @returns {Array<UsuariosModel>}
     */
    static buscarTodosOsUsuarios(){
        return this.buscar(USUARIOS_TABELA)
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

export default UsuariosMetodos;