import UsuariosModel from "../models/UsuariosModel.js"
import UsuariosMetodos from "../utils/UsuariosMetodos.js"

class UsuariosController{
    /**
     * Método para contralização de rotas no controller
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