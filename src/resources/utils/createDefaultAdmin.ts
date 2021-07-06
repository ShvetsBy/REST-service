import { getRepository } from 'typeorm';
import { User } from '../entities/user.intity';

const createAdmin = async () => {
  const userRepository = getRepository(User);
  const user = await userRepository.create({
    name: 'admin',
    login: 'admin',
    password: 'admin',
  });
  userRepository.save(user);
};

export {
  createAdmin,
};
