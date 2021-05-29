import * as usersRepo from './user.memory.repository.js';

const getAll = () => usersRepo.getAll();
const getUserById = (id) => usersRepo.getUserById(id);
const createUser = (user) => usersRepo.createUser(user);
const editUser = (id, user) => usersRepo.editUser(id, user);
const deleteUser = (id) => usersRepo.deleteUser(id);

export {
  getAll,
  getUserById,
  createUser,
  editUser,
  deleteUser,
};


