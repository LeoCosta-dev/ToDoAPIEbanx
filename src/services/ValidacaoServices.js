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

    /**
     * Método de validação de nome
     * @param {string} nome 
     * @returns {boolean}
     */
    static validaNome(nome){
        return typeof nome == "string" && nome.length > 2
    }

    /**
     * Método para validação de email
     * @param {string} email 
     * @returns {boolean}
     */
    static validaEmail(email){
        return typeof email == "string" && email.length > 2
    }

    /**
     * Método para validação de telefone
     * @param {string} telefone 
     * @returns {boolean}
     */
    static validaTelefone(telefone){
        const telefoneInt = parseInt(telefone)
        return typeof telefone == "string" && telefone.length > 9 && telefone == telefoneInt
    }

    /**
     * Método para validação de todos os campos fornecidos pelo cliente na entidade usuário
     * @param {string} nome 
     * @param {string} email 
     * @param {string} telefone 
     * @returns 
     */
    static validaCamposUsuario(nome, email, telefone){
        const isValid = this.validaNome(nome) && this.validaEmail(email) && this.validaTelefone(telefone)
        return isValid
    }
}

export default ValidacaoServices