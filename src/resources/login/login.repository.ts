import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { JWT_SECRET_KEY } from '../../common/config';
import { User } from '../entities/user.intity';

const generateToken = async (login: string, password: string) => {
  try {
    const userRepo = getRepository(User);
    const user = await userRepo.find({ login, password });
    const payload = { userId: user[0]?.id, login: user[0]?.login };
    const token = jwt.sign(payload, String(JWT_SECRET_KEY));
    return token;
  } catch (e) {
    throw new Error(e);
  }
};

export { generateToken };
