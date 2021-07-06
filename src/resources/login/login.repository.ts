import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import { JWT_SECRET_KEY } from '../../common/config';
import { User } from '../entities/user.intity';

const generateToken = async (login: string, password: string) => {
  try {
    const userRepo = getRepository(User);
    const user = await userRepo.findOne({ login });
    if (user && await bcrypt.compare(String(password), String(user?.password))) {
      const payload = { userId: user?.id, login: user?.login };
      const token = jwt.sign(payload, String(JWT_SECRET_KEY));
      return token;
    } return false;
  } catch (e) {
    throw new Error(e);
  }
};

export { generateToken };
