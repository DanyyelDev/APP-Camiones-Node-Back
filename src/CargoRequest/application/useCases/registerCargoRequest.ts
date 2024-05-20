import { CargoRequest } from '../../domain/entities/cargoRequest';
import { CargoRequestValidationService } from '../services/cargoRequestValidationService';
import { createCargoRequest } from 'CargoRequest/infrastructure/cargoRequestRepository';

export async function registerCargoRequest(cargoRequest: CargoRequest): Promise<boolean> {
    // Aquí puedes agregar la lógica para registrar el vehículo en la base de datos
    const validationService = new CargoRequestValidationService();
    const Request = new CargoRequest(cargoRequest);

    const validationResult = await validationService.validateCargoRequest(Request);

    if (validationResult.isValid) {
        await createCargoRequest(Request);
        return true
    } else {
        console.error("Error al registrar la solicitud:", validationResult.errors);
        return false
    }
}
