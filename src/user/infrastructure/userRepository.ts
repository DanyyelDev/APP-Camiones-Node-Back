import { connectToMySQL } from "../../../infrastructure/percistence/mysql/connection";
import { User } from "../domain/entities/user";

export const getUser = async (id: number) => {
    try {
        const connection = await connectToMySQL();
        const [queryResult, _fieldPacket] = await connection.query('SELECT * FROM Users WHERE id = ?', [id]);
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

export const createUser = async (user: User): Promise<boolean> => {
    try {
        const connection = await connectToMySQL();
        const [queryResult, _fieldPacket] = await connection.query('SELECT * FROM Users WHERE id = ? ', [user.id]);
        
        if (Object.keys(queryResult).length === 0 ) {
            console.log("entro");
            
            await connection.query(
                'INSERT INTO Users (address, email, full_name, id, phone, status, user_type) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [
                    user.address,
                    user.email,
                    user.full_name,
                    user.id,
                    user.phone,
                    user.status,
                    user.user_type
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


export const updateUser = async (user: User): Promise<boolean> => {
    try {
        const connection = await connectToMySQL();
        
        // Verificar si el usuario ya existe en la base de datos
        const [existingUsers, _fieldPacket] = await connection.query('SELECT * FROM Users WHERE id = ?', [user.id]);

        if (existingUsers == null) {
            await connection.end();
            console.log("El usuario no existe en la base de datos" );
            
            return false; // El usuario no existe en la base de datos
        } else {
            await connection.query(
                'UPDATE Users SET user_type = ?, full_name = ?, email = ?, phone = ?, address = ?, status = ? WHERE id = ?',
                [
                    user.user_type,
                    user.full_name,
                    user.email,
                    user.phone,
                    user.address,
                    user.status,
                    user.id
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

export const updateUserStatus = async (status: String, id: number): Promise<boolean> => {
    try {
        const connection = await connectToMySQL();
        
        // Verificar si el usuario ya existe en la base de datos
        const [existingUsers, _fieldPacket] = await connection.query('SELECT * FROM Users WHERE id = ?', [id]);

        if (existingUsers == null) {
            await connection.end();
            console.log("El usuario no existe en la base de datos" );
            
            return false; // El usuario no existe en la base de datos
        } else {
            await connection.query(
                'UPDATE Users SET status = ? WHERE id = ?',
                [
                    status,
                    id
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

export const getAllUsers = async () => {
    try {
        const connection = await connectToMySQL();
        const [queryResult, _fieldPacket] = await connection.query('SELECT * FROM Users');
        return queryResult;
    } catch (error) {
        throw new Error('Error al obtener usuarios desde la base de datos: ' + error);
    }
};
