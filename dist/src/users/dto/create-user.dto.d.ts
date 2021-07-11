export declare class CreateUserDto {
    id: string;
    name: string;
    login: string;
    password: string;
    hashPassword(): Promise<void>;
    static toResponce(user: CreateUserDto): Promise<Partial<CreateUserDto>>;
}
