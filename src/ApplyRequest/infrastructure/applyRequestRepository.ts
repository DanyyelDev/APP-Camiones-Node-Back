import { connectToMySQL } from "../../../infrastructure/percistence/mysql/connection";
import { ApplyRequest } from "../domain/entities/applyRequest";

export const getAllCargoRequests = async (applyRequest: ApplyRequest) => {
    try {
        const connection = await connectToMySQL();
        const [queryResult, _fieldPacket] = await connection.query('SELECT * FROM CargoRequests WHERE idRequest = ? AND cargoCapacity <= ? AND status = ?',
        [applyRequest.idRequest , applyRequest.cargoCapacity , 'AVAILABLE']);
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