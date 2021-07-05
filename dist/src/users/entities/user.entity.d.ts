export declare class User {
    id: string;
    name: string;
    login: string;
    password: string;
    hashPassword(): Promise<void>;
    constructor({ id, name, login, password, }?: Partial<User>);
    static toResponce(user: User): Partial<User>;
}
