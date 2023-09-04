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
}

export default UsuariosMetodos;