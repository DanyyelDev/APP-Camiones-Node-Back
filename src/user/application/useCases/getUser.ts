import { QueryResult } from "mysql2";
import { getAllUsers, getUser } from "../../infrastructure/userRepository";


export async function getDataUser(id: number): Promise<QueryResult> {
    // Aquí puedes agregar la lógica para registrar el vehículo en la base de datos
    try{
        return await getUser(id);
    } catch (error) {
        console.error("Error al traer la informacion de usuario:", error);
    }
}

export async function getDataAllUsers(): Promise<QueryResult> {
    // Aquí puedes agregar la lógica para registrar el vehículo en la base de datos
    try{
        return await getAllUsers();
    } catch (error) {
        console.error("Error al traer la lista de usuarios de carga:", error);
    }
}