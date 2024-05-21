import { QueryResult } from "mysql2";
import { ApplyRequest } from "../../domain/entities/applyRequest";
import { ApplyRequestValidationService } from "../services/applyRequestValidationService";
import { getAllCargoRequests } from "../../infrastructure/applyRequestRepository";

// Trae las request disponibles para un vehiculo
export async function availableRequest(applyRequest: ApplyRequest): Promise<QueryResult | boolean> {
    // Aquí puedes agregar la lógica para registrar el vehículo en la base de datos
    const validationService = new ApplyRequestValidationService();
    const newRequest = new ApplyRequest(applyRequest);

    const validationResult = await validationService.validateCargoRequest(newRequest);

    if (validationResult.isValid) {
        return await getAllCargoRequests(newRequest);
    } else {
        console.error("Error al registrar la solicitud:", validationResult.errors);
        return false
    }
}
