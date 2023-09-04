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
            res.status(200).json({"usuario":"José das Couves"})
        })

        /**
         * Rota apra inserir um novo usuário
         */
        app.post("/usuarios", (req, res)=>{
            const body = req.body
            console.log(body)
            res.status(200).json(body)
        })
    }
}

export default UsuariosController