import * as usersRepo from './user.memory.repository';
import { IUserDTO } from './user.dto';

const getAll = () => usersRepo.getAll();
const getUserById = (id: string) => usersRepo.getUserById(id);
const createUser = (user: IUserDTO) => usersRepo.createUser(user);
const editUser = (user: IUserDTO, id: string) => usersRepo.editUser(user, id);
const deleteUser = (id: string) => usersRepo.deleteUser(id);
// const clearTasks = (id: string) => usersRepo.clearTasks(id);

export {
  getAll,
  getUserById,
  createUser,
  editUser,
  deleteUser,
  // clearTasks,
};
