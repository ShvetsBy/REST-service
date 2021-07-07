import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  async generateToken(login: string, password: string) {
    const JWT_SECRET_KEY = 'secret';
    const user = await this.userService.findbyLogin(login);
    if (
      user &&
      (await bcrypt.compare(String(password), String(user.password)))
    ) {
      const payload = { userId: user.id, login: user.login };
      const token = jwt.sign(payload, String(JWT_SECRET_KEY));
      return token;
    }
    return false;
  }
}
