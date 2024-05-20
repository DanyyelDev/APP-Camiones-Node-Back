


export interface DispatchNote {
    id: number;
    pickup_datetime: Date;
    origin: string;
    destination: string;
    truck_plate_number: string;
    driver_name: string;
    route: string;
}

export interface ShippingRoute {
    id: number;
    origin: string;
    destination: string;
    distance_km: number;
    estimated_duration: string;
}

export interface ValidationResult {
    isValid: boolean;
    errors?: { [key: string]: string }; // Optional property for errors
  }