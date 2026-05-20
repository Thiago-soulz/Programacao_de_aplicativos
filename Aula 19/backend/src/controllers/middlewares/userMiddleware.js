import { response } from "express"

export function validateRegister(req,res,next){
    const{nome, email, senha} = req.body

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if(!nome || nome.length <3){
        return res.status(400).send({response: "revise o dado usuario"}) 
    }
    // if(emailRegex.test(email)){
    //     return res.status(400).send({response: "email incorreto"}) 
    // }


next();    
}