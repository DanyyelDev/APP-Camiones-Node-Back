export interface User {
    id: number;
    user_type: string;
    full_name: string;
    email: string;
    phone: string;
    address: string;
    status: string;
}

export class User implements User {
    constructor(public readonly user: User) {
        this.id = user.id;
        this.user_type = user.user_type;
        this.full_name = user.full_name;
        this.email = user.email;
        this.phone = user.phone;
        this.address = user.address;
        this.status = user.status;
    }
}