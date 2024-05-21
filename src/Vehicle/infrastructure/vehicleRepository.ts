import { QueryResult } from "mysql2";
import { connectToMySQL } from "../../../infrastructure/percistence/mysql/connection";
import { Vehicle } from "../domain/entities/vehicle";

export const createVehicle = async (vehicle: Vehicle) => {
    try {
        const connection = await connectToMySQL();
        const [queryResult, _fieldPacket] = await connection.query('SELECT * FROM Vehicles WHERE id = ? ', [vehicle.id]);
        
        if (Object.keys(queryResult).length === 0 ) {
            console.log("entro");
            
            await connection.query(
                'INSERT INTO Vehicles (body_type, brand, cargo_capacity, id, model, owner, driver, plate_number, location, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [
                    vehicle.body_type,
                    vehicle.brand,
                    vehicle.cargo_capacity,
                    vehicle.id,
                    vehicle.model,
                    vehicle.owner,
                    vehicle.driver,
                    vehicle.plate_number,
                    vehicle.location,
                    vehicle.status
                ]
            );
            await connection.end();

            return true;
        }else{
            return false
        }
        
    } catch (error) {
        console.error('Error al insertar en la base de datos:', error);
        // En caso de error, puedes manejarlo de acuerdo a tus necesidades (lanzar una excepción, devolver false, etc.)
        return false;
    }
}

export const getVehicle = async (id: number): Promise<QueryResult | null> => {
    try {
        const connection = await connectToMySQL();
        const [queryResult, _fieldPacket] = await connection.query('SELECT * FROM Vehicles WHERE id = ?', [id]);
        await connection.end();

        if (queryResult) {
            return queryResult;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Consulta a la base de datos: datos erroneos del usuario');
        return null;
    }
}

export const updateVehicle = async (vehicle: Vehicle): Promise<boolean> => {
    try {
        const connection = await connectToMySQL();
        
        // Verificar si el usuario ya existe en la base de datos
        const [existingUsers, _fieldPacket] = await connection.query('SELECT * FROM Vehicles WHERE id = ?', [vehicle.id]);

        if (existingUsers == null) {
            await connection.end();
            console.log("El vehiculo no existe en la base de datos" );
    
            return false; // El usuario no existe en la base de datos
        } else {
            await connection.query(
                'UPDATE Vehicles SET body_type = ?, brand = ?, cargo_capacity = ?, model = ?, owner = ?, plate_number = ?  WHERE id = ?',
                [
                    vehicle.body_type,
                    vehicle.brand,
                    vehicle.cargo_capacity,
                    vehicle.model,
                    vehicle.owner,
                    vehicle.plate_number,
                    vehicle.id
                ]
            );

            await connection.end();
            return true; // El usuario se actualizó exitosamente
        }
    } catch (error) {
        console.error('Error al actualizar en la base de datos:', error);
        // En caso de error, puedes manejarlo de acuerdo a tus necesidades (lanzar una excepción, devolver false, etc.)
        return false;
    }
}

export const deleteVehicle = async (vehicleId: number): Promise<boolean> => {
    try {
        const connection = await connectToMySQL();
        
        // Verificar si el vehículo existe en la base de datos
        const [existingVehicles, _fieldPacket] = await connection.query('SELECT * FROM Vehicles WHERE id = ?', [vehicleId]);

        if (existingVehicles == null) {
            await connection.end();
            console.log("El vehículo no existe en la base de datos");
            return false; // El vehículo no existe en la base de datos
        } else {
            await connection.query(
                'DELETE FROM Vehicles WHERE id = ?',
                [vehicleId]
            );

            await connection.end();
            console.log("El vehículo se eliminó exitosamente");
            return true; // El vehículo se eliminó exitosamente
        }
    } catch (error) {
        console.error('Error al eliminar en la base de datos:', error);
        // En caso de error, puedes manejarlo de acuerdo a tus necesidades (lanzar una excepción, devolver false, etc.)
        return false;
    }
}

export const getAllVehicles = async () => {
    try {
        const connection = await connectToMySQL();
        const [queryResult, _fieldPacket] = await connection.query('SELECT * FROM Vehicles');
        return queryResult;
    } catch (error) {
        throw new Error('Error al obtener usuarios desde la base de datos: ' + error);
    }
};