import { Vehicle } from '../../domain/entities/vehicle';
import { VehicleValidationService } from '../services/vehicleValidationService';
import { createVehicle } from '../../infrastructure/vehicleRepository';

export async function registerVehicle(vehicleData: Vehicle): Promise<void> {
    // Aquí puedes agregar la lógica para registrar el vehículo en la base de datos
    const validationService = new VehicleValidationService();
    const vehicle = new Vehicle(vehicleData);

    const validationResult = await validationService.validateVehicle(vehicle);

    if (validationResult.isValid) {
        await createVehicle(vehicle);
        console.log("Vehículo registrado exitosamente");
    } else {
        console.error("Error al registrar vehículo:", validationResult.errors);
    }
}
