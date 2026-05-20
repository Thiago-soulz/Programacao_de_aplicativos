import { connection } from "../database/db.js";

export const getPeople = (req, res) => {
    const users = connection.query('SELECT * FROM user', (err, results) => {
        if(err){
            return res.status(500).send({response: "Ocorreu algum erro"})
        }
        return res.status(200).send(results)
    })
}
//test
export const createUser = (req, res) => {
    const { nome, email, senha } = req.body;
    try{
      connection.query('INSERT INTO user(nome, email, senha) VALUES (?,?,?)',
        [nome, email, senha],
        (err, results) => {
            if(err){
                return res.status(500).send({response: "Deu erro!"})
            }

            return res.status(200).send({ response: "Usuário registrado!"})
        }
      )
    }
    catch{
        return res.status(500).send({ response: "Erro ao registrar"})
    }
}