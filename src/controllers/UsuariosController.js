class UsuariosController{
    static rotas(app){
        app.get("/usuarios", (req, res)=>{
            res.status(200).json({"usuario":"José das Couves"})
        })

        app.post("/usuarios", (req, res)=>{
            const body = req.body
            console.log(body)
            res.status(200).json(body)
        })
    }
}

export default UsuariosController