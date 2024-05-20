export interface Vehicle {
  id: number;
  plate_number: string;
  brand: string;
  model: string;
  cargo_capacity: number;
  body_type: string;
  owner: number;
  location: string;
  status: 'AVAILABLE' | 'UNAVAILABLE';
}
  
export class Vehicle implements Vehicle {
  constructor(public readonly vehicleData: Vehicle) {
    this.id = vehicleData.id;
    this.plate_number = vehicleData.plate_number;
    this.brand = vehicleData.brand;
    this.model = vehicleData.model;
    this.cargo_capacity = vehicleData.cargo_capacity;
    this.body_type = vehicleData.body_type;
    this.owner = vehicleData.owner;
    this.location = vehicleData.location;
    this.status = vehicleData.status;
  }
}