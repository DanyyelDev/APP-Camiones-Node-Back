import { CargoRequest } from '../../domain/entities/cargoRequest';
import { CargoRequestValidationService } from '../services/cargoRequestValidationService';
import { updateCargoRequest } from 'CargoRequest/infrastructure/cargoRequestRepository';

export async function updateDataCargoRequest(cargoRequest: CargoRequest): Promise<boolean> {
    // Aquí puedes agregar la lógica para registrar el vehículo en la base de datos
    const validationService = new CargoRequestValidationService();
    const Request = new CargoRequest(cargoRequest);

    const validationResult = await validationService.validateCargoRequest(Request);

    if (validationResult.isValid) {
        await updateCargoRequest(Request);
        return true
    } else {
        return false
    }
}
