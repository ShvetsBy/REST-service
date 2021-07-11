import * as bcrypt from 'bcrypt';
export class CreateUserDto {
  id: string;
  name: string;
  login: string;
  password: string;

  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  static async toResponce(
    user: CreateUserDto
  ): Promise<Partial<CreateUserDto>> {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
