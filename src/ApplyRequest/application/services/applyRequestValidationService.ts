import { ApplyRequest } from '../../domain/entities/applyRequest';
import { ValidationResult } from '../../../../types/types';

export class ApplyRequestValidationService {
    validateId(id: number): boolean {
      return id > 0;
    }
  
    validateOrigin(origin: string): boolean {
      return origin.trim().length > 0;
    }

    validateDestination(destination: string): boolean {
      return destination.trim().length > 0;
    }

    validateDimensions(dimensions: string): boolean {
      return dimensions.trim().length > 0;
    }
  
    // ... Validación para otras propiedades
  
    validateCargoRequest(applyRequest: ApplyRequest): ValidationResult {
      const errors: { [key: string]: string } = {};
  
      if (!this.validateId(applyRequest.idRequest)) {
        errors["id"] = "El ID debe ser un número positivo";
      }
      if (!this.validateId(applyRequest.cargoCapacity)) {
        errors["id"] = "El ID debe ser un número positivo";
      }
  
      if (!this.validateOrigin(applyRequest.location)) {
        errors["origin"] = "El origen no puede estar vacío";
      }

      if (!this.validateDestination(applyRequest.status)) {
        errors["destination"] = "El destino no puede estar vacío";
      }
      // ... Validación para otras propiedades
  
      if (Object.keys(errors).length > 0) {
        return { isValid: false, errors };
      } else {
        return { isValid: true };
      }
    }
  }
  