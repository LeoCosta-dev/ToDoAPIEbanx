/**
 * Objeto modelo para usuários
 */
class UsuariosModel{
    /**
     * Construtor do objeto modelo para usuários
     * @param {string} nome 
     * @param {string} email 
     * @param {string} telefone 
     */
    constructor(nome, email, telefone){
        this.nome = nome
        this.email = email
        this.telefone = telefone
    }
}

export default UsuariosModel