import { deleteCargoRequest } from 'CargoRequest/infrastructure/cargoRequestRepository';

export async function deleteDataCargoRequest(idRequest: number): Promise<boolean> {
    // Aquí puedes agregar la lógica para registrar el vehículo en la base de datos
    try{
        await deleteCargoRequest(idRequest);
        return true;
    } catch (error) {
        return false;
    }
}