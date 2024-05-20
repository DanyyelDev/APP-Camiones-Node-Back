import { User } from "../../domain/entities/user";
import { UserValidationService } from "../services/userValidationService";
import { createUser } from "../../infrastructure/userRepository";


export async function registerDataUser(user: User): Promise<boolean> {
    // Aquí puedes agregar la lógica para registrar el vehículo en la base de datos
    const validationService = new UserValidationService();
    const newUser = new User(user);

    const validationResult = await validationService.validate(newUser);

    if (validationResult.isValid) {
        await createUser(newUser);
        return true
    } else {
        console.error("Error al registrar la solicitud:", validationResult.errors);
        return false
    }
}
