import { getRepository } from 'typeorm';
import { User } from '../users/entities/user.entity';

const createAdmin = async () => {
  const userRepository = getRepository(User);
  const user = await userRepository.create({
    name: 'adminator',
    login: 'adminator',
    password: 'adminator',
  });
  userRepository.save(user);
  console.log(user);
};

export { createAdmin };
