import { Vehicle } from '../../domain/entities/vehicle';
import { ValidationResult } from '../../../../types/types';

export class VehicleValidationService {
    validateId(id: number): boolean {
      return id > 0;
    }
  
    validateBrand(brand: string): boolean {
      return brand.trim().length > 0;
    }
  
    // ... Validación para otras propiedades
  
    validateVehicle(vehicleData: Vehicle): ValidationResult {
      const errors: { [key: string]: string } = {};
  
      if (!this.validateId(vehicleData.id)) {
        errors["id"] = "El ID debe ser un número positivo";
      }
  
      if (!this.validateBrand(vehicleData.brand)) {
        errors["brand"] = "La marca no puede estar vacía";
      }
  
      // ... Validación para otras propiedades
  
      if (Object.keys(errors).length > 0) {
        return { isValid: false, errors };
      } else {
        return { isValid: true };
      }
    }
  }
  