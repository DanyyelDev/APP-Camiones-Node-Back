import { getAllUsers, getUser } from "user/infrastructure/userRepository";


export async function getDataUser(id: number): Promise<void> {
    // Aquí puedes agregar la lógica para registrar el vehículo en la base de datos
    try{
        await getDataUser(id);
    } catch (error) {
        console.error("Error al traer la informacion de usuario:", error);
    }
}

export async function getDataAllUsers(): Promise<void> {
    // Aquí puedes agregar la lógica para registrar el vehículo en la base de datos
    try{
        await getAllUsers();
    } catch (error) {
        console.error("Error al traer la lista de usuarios de carga:", error);
    }
}