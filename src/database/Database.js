import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";

/**
 * Torna as ações do SQLite (erros, inserções, ...) legiveis no terminal
 */
sqlite3.verbose()

/**
 * Aponta o caminho onde será salvo o arquivo database.db
 */
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db"

/**
 * Inicializa o banco de dados SQLite
 */
const Database = new sqlite3.Database(filePath)

export default Database