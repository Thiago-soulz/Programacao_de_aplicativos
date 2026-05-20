import express, { Router } from 'express'
import { getPeople, createUser } from '../controllers/UserController.js';
import { validateRegister } from '../controllers/middlewares/userMiddleware.js';

const router = express.Router();

router
    .get('/users',getPeople)// loclahost:8080/users
    .post('/register',validateRegister, createUser)

export default router