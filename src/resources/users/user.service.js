const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getUserById = (id) => usersRepo.getUserById(id);
const createUser = (user) => usersRepo.createUser(user);
const editUser = (id, user) => usersRepo.editUser(id, user);
const deleteUser = (id) => usersRepo.deleteUser(id);
module.exports = { getAll, getUserById, createUser, editUser, deleteUser };

// добавление пользователя в массив происходит тут.
