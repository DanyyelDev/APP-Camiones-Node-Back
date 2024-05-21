export interface CargoRequest {
  id: number;
  request_date: Date;
  cargo_owner_id: number;
  origin: string;
  destination: string;
  dimensions: string;
  weight: number;
  insured_value: number;
  packaging: string;
  state: 'AVAILABLE' | 'INPROCESS' | 'COMPLETED'
}
  
export class CargoRequest implements CargoRequest {
  constructor(public readonly cargoRequestData: CargoRequest) {
    this.id = cargoRequestData.id;
    this.request_date = cargoRequestData.request_date;
    this.cargo_owner_id = cargoRequestData.cargo_owner_id;
    this.origin = cargoRequestData.origin;
    this.destination = cargoRequestData.destination;
    this.dimensions = cargoRequestData.dimensions;
    this.weight = cargoRequestData.weight;
    this.insured_value = cargoRequestData.insured_value;
    this.packaging = cargoRequestData.packaging;
    this.state = cargoRequestData.state;
  }
}