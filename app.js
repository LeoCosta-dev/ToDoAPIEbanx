import express from "express";
// const express = require("express")
import UsuariosController from "./src/controllers/UsuariosController.js";

/**
 * Instancia do express
 * (inicialização do que foi importado)
 */
const app = express()
/**
 * Váriável de alocação de porta
 */
const port = process.env.PORT || 3000

/**
 * Levante do servidor da API.
 */
app.listen(port, ()=>{
    console.log(`Servidor disponível em http://localhost:${port}`)
})

app.use(express.json())

UsuariosController.rotas(app)
