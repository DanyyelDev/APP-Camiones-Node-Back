import { CargoRequest } from '../../domain/entities/cargoRequest';
import { ValidationResult } from '../../../../types/types';

export class CargoRequestValidationService {
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
  
    validateCargoRequest(cargoRequest: CargoRequest): ValidationResult {
      const errors: { [key: string]: string } = {};
  
      if (!this.validateId(cargoRequest.id)) {
        errors["id"] = "El ID debe ser un número positivo";
      }
  
      if (!this.validateOrigin(cargoRequest.origin)) {
        errors["origin"] = "El origen no puede estar vacío";
      }

      if (!this.validateDestination(cargoRequest.destination)) {
        errors["destination"] = "El destino no puede estar vacío";
      }

      if (!this.validateDimensions(cargoRequest.dimensions)) {
        errors["dimensions"] = "La dimensión no puede estar vacía";
      }
  
      // ... Validación para otras propiedades
  
      if (Object.keys(errors).length > 0) {
        return { isValid: false, errors };
      } else {
        return { isValid: true };
      }
    }
  }
  