export class CreateUserDto {
  id: string;
  name: string;
  login: string;
  password?: string;

  static async toResponce(
    user: CreateUserDto
  ): Promise<Partial<CreateUserDto>> {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
