import { Router } from "express";
import passport from 'passport';
import registroModel from "../models/registro.model.js";

const router = Router();

router.get('/', (req, res) => {
    res.render('registro', {});
})


router.post('/', passport.authenticate('register', {failureRedirect: '/failregister'}), async (req, res) => { res.send({status: 'success', message: 'Usuario creado correctamente'})
})

router.get('/failregister', async (req, res) => {
    console.log('failed Strategy')
    res.send({error: 'Failed Strategy'})
})

export default router