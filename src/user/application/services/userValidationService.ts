import { User } from 'user/domain/entities/user';
import { ValidationResult } from '../../../../types/types';

export class UserValidationService {
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
  
    validate(user: User): ValidationResult {
      const errors: { [key: string]: string } = {};
  
      if (!this.validateId(user.id)) {
        errors["id"] = "El ID debe ser un número positivo";
      }
  
      if (!this.validateOrigin(user.email)) {
        errors["origin"] = "El origen no puede estar vacío";
      }

      if (!this.validateDestination(user.phone)) {
        errors["destination"] = "El destino no puede estar vacío";
      }

      if (!this.validateDimensions(user.status)) {
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
  