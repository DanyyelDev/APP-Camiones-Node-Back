import * as express from 'express'

import { User } from 'user/domain/entities/user'
import { registerDataUser } from '../user/application/useCases/registerUser'
import { updateDataUser, updateStatusUser } from '../user/application/useCases/updateUser'
import { getDataAllUsers, getDataUser } from '../user/application/useCases/getUser'

const router = express.Router()

router.post('/', async (req, res) => {
    const user = req.body as User

    try {
        if (await registerDataUser(user)) {
            res.send("Successfully User Created")
        } else {
            res.send("Error Creating User").status(409)
        }
    } catch (error) {
        console.log("Error : ", error);
    }
})

router.put('/', async (req, res) => {
    const user = req.body as User

    try {
        await updateDataUser(user)
        res.send("Successfully Update User data")
    } catch (error) {
        res.send("Wrong password or username")
    }
});

router.put('/status', async (req, res) => {
    try {
        await updateStatusUser(req.body.status, req.body.id)
        res.send("Successfully Update Status")
    } catch (error) {
        res.send("Wrong Update Status")
    }
});

router.get('/', async (req, res) => {
    try {
        res.send(await getDataUser(req.body.id))
    } catch (error) {
        res.send("Wrong id")
    }
});

router.get('/all', async (_req, res) => {
    try {
        const users = await getDataAllUsers(); // Esperamos a que se resuelva la promesa
        res.send(users); // Enviamos la respuesta con los usuarios obtenidos
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error al obtener usuarios' }); // Manejamos errores de manera adecuada
    }
});

router.get('/test', async (req, res) => {
    try {
        res.json({ "msg": "Hello world" });
    } catch (error) {
        res.send("Wrong id")
    }
});

//falta implementar el delete user

export default router