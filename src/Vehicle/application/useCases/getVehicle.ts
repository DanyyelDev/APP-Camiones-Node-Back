import { QueryResult } from 'mysql2';
import { getVehicle, getAllVehicles } from '../../infrastructure/vehicleRepository';

export async function getdataVehicle(idVehicle: number): Promise<QueryResult | null> {
    const vehicle = await getVehicle(idVehicle);
    return vehicle || null
}

export async function getdataAllVehicles(): Promise<QueryResult | null> {
    const vehicle = await getAllVehicles();
    return vehicle || null
}