import { IUser } from './user.interface';
declare class OldUser implements IUser {
    id: string | null;
    name: string;
    login: string;
    password: string;
    constructor({ name, login, password }: IUser);
    static toResponse(user: IUser): {
        id: string;
        name: string;
        login: string;
    };
}
export { OldUser };
