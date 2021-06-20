import { User } from '../entities/user.intity';
import { getRepository } from 'typeorm'
import { IUser } from './user.interface';
import { IUserDTO } from './user.dto'

const getAll = async (): Promise<User[]> => {
  const userRepo = getRepository(User);
  return userRepo.find({where: {} });
};

const createUser = async (dto: IUserDTO) => {
  try {
    const userRepo = getRepository(User);
    const newUser = userRepo.create(dto);
    const savedUser = userRepo.save(newUser);
  return savedUser;
  } catch (e) {
    throw new Error(e);
  }
}
 
const getUserById = async (id: string) => {
  try {
    const userRepo = getRepository(User);
    const user = userRepo.findOne(id);
    if (!user) {
      throw new Error("Can't find such user");
    }
    return user;
  } catch (e) {
    throw new Error(e);
  }
};

const editUser = async (dto:Omit<IUser,'id'>, id: string): Promise<User | 'NOT_FOUND'> => {
    const userRepo = getRepository(User);
    const user = await userRepo.findOne(id);
    if (user === undefined) return 'NOT_FOUND';
    const updatedUser = await userRepo.update(id, dto);
    return updatedUser.raw;  
};

const deleteUser = async (id: string):Promise<'DELETED' | 'NOT_FOUND'> => {
  const userRepo = getRepository(User);
  const userDeleted = await userRepo.delete(id);
  if (userDeleted.affected) return 'DELETED';
  return 'NOT_FOUND';
};

// const clearTasks = async (id: string | null) => {
//   try {
//     const tasks: ITask[] = await taskRepo.getAll();
//     tasks.forEach((item) => {
//       const task = item;
//       if (task.userId === id) {
//         task.userId = null;
//       }
//     });
//   } catch (e) {
//     throw new Error(e);
//   }
// };

export {
  getAll,
  getUserById,
  createUser,
  editUser,
  deleteUser,
  // clearTasks,
};
