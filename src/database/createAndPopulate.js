import Database from "./Database.js";

/**
 * Script sql de criação da tabela USUARIOS (SQLite é Case Sensitive, isto é, diferencia letras)
 */
const USUARIOS_TABLE = `
CREATE TABLE IF NOT EXISTS "USUARIOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "TELEFONE" varchar(11)
  );
`

/**
 * script de inserção de dados base
 */
const ADD_USUARIOS_DATA = `
INSERT INTO USUARIOS (NOME, EMAIL, TELEFONE)
VALUES 
    ('Eugênio Oliveira', 'eugenio.oliveira@bol.com.br', '2140028911'),
    ('Olívia Ribeiro', 'olivia.ribeiro@gmail.com', '1140028922'),
    ('Mirtes Faria Lima', 'mirtes_fl@yahoo.com', '3125214430')
`

/**
 * Function que aplica a criação da tabela USUARIOS via SQLite
 */
function criaTabelaUsuarios() {
    Database.run(USUARIOS_TABLE, (error)=> {
       if (error) {
            console.log("Erro ao criar tabela de Usuários")
        } else {
            console.log("Tabela Usuários criada com sucesso!")
        }
    });
}

/**
 * Function que polula via SQLite a tabela USUARIOS
 */
function populaTabelaUsuarios() {
    Database.run(ADD_USUARIOS_DATA, (error)=> {
       if (error) {
        console.log("Erro ao popular tabela de Usuários")
        }
        else {
            console.log("Tabela Usuários populada com sucesso!")
        }
    });
}


/**
 * Roda as funções de criação de tabela e população em serie (Uma após a outra)
 */
Database.serialize(()=>{
    criaTabelaUsuarios();
    populaTabelaUsuarios();
})