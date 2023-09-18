import express from "express";
// const express = require("express")
import cors from "cors";
import { config } from "dotenv";
import UsuariosController from "./src/controllers/UsuariosController.js";


config()
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

/**
 * Middleware para reconhecimento do formato JSON para a aplicação
 */
app.use(express.json())

app.use(cors('*'))
/** 
 * Chamada das rotas do controller
*/
UsuariosController.rotas(app)
