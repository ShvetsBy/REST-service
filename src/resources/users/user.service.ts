import * as usersRepo from './user.memory.repository.js';
import { IUser } from './user.interface'


const getAll = () => usersRepo.getAll();
const getUserById = (id: string) => usersRepo.getUserById(id);
const createUser = (user: IUser) => usersRepo.createUser(user);
const editUser = (user: IUser, id: string, ) => usersRepo.editUser(user, id);
const deleteUser = (id: string) => usersRepo.deleteUser(id);
const clearTasks = (id: string) => usersRepo.clearTasks(id);

export {
  getAll,
  getUserById,
  createUser,
  editUser,
  deleteUser,
  clearTasks,
};


