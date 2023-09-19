import UsuariosModel from "../models/UsuariosModel.js"
import ValidacaoServices from "../services/ValidacaoServices.js"
import UsuariosDAO from "../DAO/UsuariosDAO.js"

class UsuariosController {
    /**
     * Método para centralização de rotas no controller
     * @param {Express} app 
     */
    static rotas(app) {
        /**
         * Rota para buscar todos os usuários
         */
        app.get("/usuarios", async (req, res) => {
            const usuarios = await UsuariosDAO.buscarTodosOsUsuarios()
            res.status(200).json(usuarios)
        })

        /**
         * Rota para buscar usuários pelo id
         */
        app.get("/usuarios/:id", async (req, res) => {
            const id = req.params.id
            try {
                const resposta = await UsuariosDAO.buscarUsuarioPorId(id)
                res.status(200).json(resposta)
            } catch (error) {
                res.status(404).json({id: id, ...error})
            }
        })

        /**
         * Rota para deletar usuário
         */
        app.delete("/usuarios/:id", async (req, res) => {
            const id = req.params.id
            try {
                await ValidacaoServices.validarExistencia(id)
                UsuariosDAO.deletarUsuarioPorId(id)
                res.status(200).json({ error: false })
            } catch (error) {
                res.status(404).json({ id: id, ...error })
            }
        })

        /**
         * Rota para inserir um novo usuário
         */
        app.post("/usuarios", async (req, res) => {
            const body = Object.values(req.body)
            try {
                ValidacaoServices.validaCamposUsuario(...body)
                const usuarioModelado = new UsuariosModel(...body)
                await UsuariosDAO.inserirUsuario(usuarioModelado)
                res.status(201).json({
                    error: false,
                    message: "Usuário criado com sucesso"
                })
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })

        /**
         * Rota para atualizar um registro já existente na tabela usuários
         */
        app.put("/usuarios/:id", async (req, res) => {
            const id = req.params.id
            const body = req.body
            try {
                ValidacaoServices.validaCamposUsuario(body.nome, body.email, body.telefone)
                await ValidacaoServices.validarExistencia(id)
                const usuarioModelado = new UsuariosModel(body.nome, body.email, body.telefone)
                UsuariosDAO.AtualizarUsuarioPorId(id, usuarioModelado)
                res.status(204).json()
            } catch (error) {
                if(error.message == "Campos invalidos"){
                    res.status(400).json({error: error.message})
                } else {
                    res.status(404).json({id: id, ...error})
                }
            }
        })
    }
}

export default UsuariosController