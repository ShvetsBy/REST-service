export declare class CreateUserDto {
    id: string;
    name: string;
    login: string;
    password?: string;
    static toResponce(user: CreateUserDto): Promise<Partial<CreateUserDto>>;
}
