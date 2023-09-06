import UsuariosModel from "../models/UsuariosModel.js"
import ValidacaoServices from "../services/ValidacaoServices.js"
import UsuariosMetodos from "../utils/UsuariosMetodos.js"

class UsuariosController{
    /**
     * Método para centralização de rotas no controller
     * @param {Express} app 
     */
    static rotas(app){
        /**
         * Rota para buscar todos os usuários
         */
        app.get("/usuarios", (req, res)=>{
            const usuarios = UsuariosMetodos.buscarTodosOsUsuarios()
            res.status(200).json(usuarios)
        })
        
        /**
         * Rota para buscar usuários pelo id
         */
        app.get("/usuarios/:id", (req, res)=>{
            const id = req.params.id
            const isValid = ValidacaoServices.validarExistencia(id)
            if(isValid){
                const resposta = UsuariosMetodos.buscarUsuarioPorId(id)
                res.status(200).json(resposta)
            }
            res.status(404).json({error: true, message: `Usuário não encontrado para o id ${id}`})
        })

        /**
         * Rota para deletar usuário
         */
        app.delete("/usuarios/:id", (req, res)=>{
            const id = req.params.id
            const isValid = ValidacaoServices.validarExistencia(id)
            if(isValid){
                UsuariosMetodos.deletarUsuarioPorId(id)
                res.status(200).json({error: false})
            }
            res.status(404).json({error: true, message: `Usuário não encontrado para o id ${id}`})
        })

        /**
         * Rota apra inserir um novo usuário
         */
        app.post("/usuarios", (req, res)=>{
            const body = Object.values(req.body)
            const usuarioModelado = new UsuariosModel(...body)
            UsuariosMetodos.inserirUsuario(usuarioModelado)
            res.status(200).json({
                error: false,
                message: "Usuário criado com sucesso"
            })
        })
    }
}

export default UsuariosController