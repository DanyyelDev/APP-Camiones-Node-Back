import { User } from "user/domain/entities/user";
import { updateUser, updateUserStatus } from "user/infrastructure/userRepository";
import { UserValidationService } from "../services/userValidationService";

export async function updateDataUser(user: User): Promise<boolean> {
    // Aquí puedes agregar la lógica para registrar el vehículo en la base de datos
    const validationService = new UserValidationService();
    const newUser = new User(user);

    const validationResult = await validationService.validate(newUser);

    if (validationResult.isValid) {
        await updateUser(newUser);
        return true
    } else {
        return false
    }
}

export async function updateStatusUser(status: String, id: number): Promise<boolean> {
    // Aquí puedes agregar la lógica para registrar el vehículo en la base de datos

    try{
        await updateUserStatus(status, id);
        return true
    } catch {
        return false
    }
}
