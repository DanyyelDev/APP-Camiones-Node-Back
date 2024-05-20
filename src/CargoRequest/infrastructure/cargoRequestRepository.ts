import { connectToMySQL } from "../../../infrastructure/percistence/mysql/connection";
import { CargoRequest } from "../domain/entities/cargoRequest";

export const getCargoRequest = async (id: number) => {
    try {
        const connection = await connectToMySQL();
        const [queryResult, _fieldPacket] = await connection.query('SELECT * FROM CargoRequests WHERE id = ?', [id]);
        await connection.end();

        if (queryResult) {
            return queryResult;
        } else {
            return null;
        }
    } catch (error) {
        //console.error('Consulta a la base de datos: datos erroneos del usuario');
        return null;
    }
}

export const createCargoRequest = async (cargoRequest: CargoRequest): Promise<boolean> => {
    try {
        const connection = await connectToMySQL();
        const [queryResult, _fieldPacket] = await connection.query('SELECT * FROM CargoRequests WHERE id = ? ', [cargoRequest.id]);
        
        if (Object.keys(queryResult).length === 0 ) {
            console.log("entro");
            
            await connection.query(
                'INSERT INTO CargoRequests (request_date, cargo_owner_id, origin, destination, dimensions, weight, insured_value, packaging) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                [
                    cargoRequest.request_date,
                    cargoRequest.cargo_owner_id,
                    cargoRequest.origin,
                    cargoRequest.destination,
                    cargoRequest.dimensions,
                    cargoRequest.weight,
                    cargoRequest.insured_value,
                    cargoRequest.packaging
                ]
            );
            await connection.end();

            return true;
        } else {
            return false
        }
        
    } catch (error) {
        console.error('Error al insertar en la base de datos:', error);
        // En caso de error, puedes manejarlo de acuerdo a tus necesidades (lanzar una excepción, devolver false, etc.)
        return false;
    }
}

export const updateCargoRequest = async (cargoRequest: CargoRequest): Promise<boolean> => {
    try {
        const connection = await connectToMySQL();
        
        // Verificar si la solicitud de carga ya existe en la base de datos
        const [existingRequests, _fieldPacket] = await connection.query('SELECT * FROM CargoRequests WHERE id = ?', [cargoRequest.id]);

        if (existingRequests == null) {
            await connection.end();
            console.log("La solicitud de carga no existe en la base de datos" );
    
            return false; // La solicitud de carga no existe en la base de datos
        } else {
            await connection.query(
                'UPDATE CargoRequests SET request_date = ?, cargo_owner_id = ?, origin = ?, destination = ?, dimensions = ?, weight = ?, insured_value = ?, packaging = ? WHERE id = ?',
                [
                    cargoRequest.request_date,
                    cargoRequest.cargo_owner_id,
                    cargoRequest.origin,
                    cargoRequest.destination,
                    cargoRequest.dimensions,
                    cargoRequest.weight,
                    cargoRequest.insured_value,
                    cargoRequest.packaging,
                    cargoRequest.id
                ]
            );

            await connection.end();
            return true; // La solicitud de carga se actualizó exitosamente
        }
    } catch (error) {
        console.error('Error al actualizar en la base de datos:', error);
        // En caso de error, puedes manejarlo de acuerdo a tus necesidades (lanzar una excepción, devolver false, etc.)
        return false;
    }
}

export const deleteCargoRequest = async (cargoRequestId: number): Promise<boolean> => {
    try {
        const connection = await connectToMySQL();
        
        // Verificar si la solicitud de carga existe en la base de datos
        const [existingRequests, _fieldPacket] = await connection.query('SELECT * FROM CargoRequests WHERE id = ?', [cargoRequestId]);

        if (existingRequests == null) {
            await connection.end();
            console.log("La solicitud de carga no existe en la base de datos");
            return false; // La solicitud de carga no existe en la base de datos
        } else {
            await connection.query(
                'DELETE FROM CargoRequests WHERE id = ?',
                [cargoRequestId]
            );

            await connection.end();
            console.log("La solicitud de carga se eliminó exitosamente");
            return true; // La solicitud de carga se eliminó exitosamente
        }
    } catch (error) {
        console.error('Error al eliminar en la base de datos:', error);
        // En caso de error, puedes manejarlo de acuerdo a tus necesidades (lanzar una excepción, devolver false, etc.)
        return false;
    }
}

export const getAllCargoRequests = async () => {
    try {
        const connection = await connectToMySQL();
        const [queryResult, _fieldPacket] = await connection.query('SELECT * FROM CargoRequests');
        return queryResult;
    } catch (error) {
        throw new Error('Error al obtener las solicitudes de carga desde la base de datos: ' + error);
    }
};
