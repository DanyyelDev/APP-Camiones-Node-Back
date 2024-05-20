import { getCargoRequest, getAllCargoRequests } from 'CargoRequest/infrastructure/cargoRequestRepository';

export async function getDataCargoRequest(idRequest: number): Promise<void> {
    // Aquí puedes agregar la lógica para registrar el vehículo en la base de datos
    try{
        await getCargoRequest(idRequest);
    } catch (error) {
        console.error("Error al traer la solicitud de carga:", error);
    }
}

export async function getDataAllCargoRequest(): Promise<void> {
    // Aquí puedes agregar la lógica para registrar el vehículo en la base de datos
    try{
        await getAllCargoRequests();
    } catch (error) {
        console.error("Error al traer la lista de solicitudes de carga:", error);
    }
}