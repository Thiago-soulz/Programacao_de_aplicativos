import express, {router} from 'express'
const routes = express.Router();
const users = ["Diego", "Thiago", "leticia","Luan"]

router
    .get('/users', (req , res) => {
        res.send(users)
    })

    .post('/users', (req, res) => {
        const { name, lastname } = req.body;
    
        users.push({ name, lastname });
    
        return res.status(200).send({
            response: `Usuario ${name} ${lastname} registrado com sucesso`
        });
    });
    
    export default router;