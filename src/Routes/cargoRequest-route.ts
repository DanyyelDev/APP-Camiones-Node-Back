import * as express from 'express';
import { CargoRequest } from '../CargoRequest/domain/entities/cargoRequest';
import { registerCargoRequest } from 'CargoRequest/application/useCases/registerCargoRequest';
import { updateDataCargoRequest } from 'CargoRequest/application/useCases/updateCargoRequest';
import { deleteDataCargoRequest } from 'CargoRequest/application/useCases/deleteCargoRequest';
import { getDataAllCargoRequest } from 'CargoRequest/application/useCases/getCargoRequest';

const router = express.Router();

router.post('/', async (req, res) => {
    const cargoRequest = req.body as CargoRequest;

    try {
        if (registerCargoRequest(cargoRequest)) {
            res.send("Solicitud de carga creada exitosamente");
        } else {
            res.status(409).send("Error al crear la solicitud de carga");
        }
    } catch (error) {
        console.error("Error al crear la solicitud de carga:", error);
        res.status(500).send("Error interno del servidor");
    }
});

router.put('/', async (req, res) => {
    const cargoRequest = req.body as CargoRequest;

    try {
        if (updateDataCargoRequest(cargoRequest)) {
            res.send("Solicitud de carga actualizada exitosamente");
        } else {
            res.status(404).send("No se encontró la solicitud de carga");
        }
    } catch (error) {
        console.error("Error al actualizar la solicitud de carga:", error);
        res.status(500).send("Error interno del servidor");
    }
});

router.delete('/', async (req, res) => {
    const cargoRequestId = req.body.id as number;

    try {
        if (deleteDataCargoRequest(cargoRequestId)) {
            res.send("Solicitud de carga eliminada exitosamente");
        } else {
            res.status(404).send("No se encontró la solicitud de carga");
        }
    } catch (error) {
        console.error("Error al eliminar la solicitud de carga:", error);
        res.status(500).send("Error interno del servidor");
    }
});

router.get('/all', async (_req, res) => {
    try {
        const cargoRequests = await getDataAllCargoRequest();
        res.send(cargoRequests);
    } catch (error) {
        console.error("Error al obtener todas las solicitudes de carga:", error);
        res.status(500).send("Error interno del servidor");
    }
});

export default router;
