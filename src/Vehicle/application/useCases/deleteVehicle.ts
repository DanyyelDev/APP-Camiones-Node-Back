import { deleteVehicle } from '../../infrastructure/vehicleRepository';

export async function deletedataVehicle(idVehicle: number): Promise<void> {
    // Aquí puedes agregar la lógica para eliminar el vehículo en la base de datos
    try {
        await deleteVehicle(idVehicle);
    } catch (error) {
        console.error('Error al eliminar el vehículo en la base de datos:', error);
    }
}
