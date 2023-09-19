import UsuariosDAO from "../DAO/UsuariosDAO.js";

class ValidacaoServices{
    /**
     * Método que valida a existencia do usuário na base de dados
     * @param {string} id 
     * @returns {boolean}
     */
    static async validarExistencia(id){
        try {
            await UsuariosDAO.buscarUsuarioPorId(id)
        } catch (error) {
            throw error
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
        const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        return regex.test(email)
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
        if(!isValid){
            throw new Error("Campos invalidos")
        }
    }
}

export default ValidacaoServices