import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { JWT_SECRET_KEY } from '../../common/config';
import { User } from '../entities/user.intity';

const generateToken = async (login: string, password: string) => {
  try {
    const userRepo = getRepository(User);
    const user = await userRepo.findOne({ login, password });
    const payload = { userId: user?.id, login: user?.login };
    const token = jwt.sign(payload, String(JWT_SECRET_KEY));

    return token;
  } catch (e) {
    throw new Error(e);
  }
};

export { generateToken };
