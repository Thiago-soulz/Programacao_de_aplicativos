const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')
const app = express();
const port = 8080;

app.use(express.json())
app.use(cors({
    origin: '*'
}))

const connection = mysql.createConnection({
    user: "root",
    password: "root",
    host: "localhost",
    database: "aula_add",
    port: 3307
})

if(connection){
    console.log("Banco de dados conectado!")
}

app.get('/', (req, res) => {
    return res.send("Servidor funcionando corretamente!")
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:8080")
})