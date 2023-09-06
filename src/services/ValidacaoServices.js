import UsuariosMetodos from "../utils/UsuariosMetodos.js";

class ValidacaoServices{
    /**
     * Método que valida a existencia do usuário na base de dados
     * @param {string} id 
     * @returns {boolean}
     */
    static validarExistencia(id){
        const usuario = UsuariosMetodos.buscarUsuarioPorId(id)
        if(usuario){
            return true
        } else {
            return false
        }
    }
}

export default ValidacaoServices