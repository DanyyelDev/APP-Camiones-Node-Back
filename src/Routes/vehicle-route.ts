import * as express from "express";
import { Vehicle } from '../Vehicle/domain/entities/vehicle'
import { registerVehicle } from "../Vehicle/application/useCases/registerVehicle";
import { updatedataVehicle } from "../Vehicle/application/useCases/updateVehicle";
import { deletedataVehicle } from "../Vehicle/application/useCases/deleteVehicle";
import { getdataAllVehicles, getdataVehicle } from "../Vehicle/application/useCases/getVehicle";

export function VehicleRouter() {}

const router = express.Router()

router.post('/', async (req, res) => {
    const vehicle = req.body as Vehicle

    try {
        if (registerVehicle(vehicle)) {
            res.send("Successfully User Created")
        } else {
            res.send("Error Creating vehicle").status(409)
        }
    } catch (error) {
        console.log("Error : ", error);
    }
})

router.put('/', async (req, res) => {
    const vehicle = req.body as Vehicle

    try {
        await updatedataVehicle(vehicle)
        res.send("Successfully Update User data")
    } catch (error) {
        res.send("Wrong password or username")
    }
});

router.delete('/', async (req, res) => {
    try {
        res.send(await deletedataVehicle(req.body.id))
    } catch (error) {
        res.send("Wrong id")
    }
});

router.get('/', async (req, res) => {
    try {
        const vehicle = getdataVehicle(req.body.id);
        res.send(vehicle); // Enviamos la respuesta con los usuarios obtenidos
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
});

router.get('/all', async (_req, res) => {
    try {
        const vehicle = getdataAllVehicles();
        res.send(vehicle); // Enviamos la respuesta con los usuarios obtenidos
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
});

router.get('/test', async (req, res) => {
    try {
        res.json({ "msg": "End point vehicles is ON" });
    } catch (error) {
        res.send("Wrong id")
    }
});


export default router