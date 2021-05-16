const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();
// const getUserById = (id) => usersRepo.getUserById(id);
// const createUser = (user) => usersRepo.createUser(user);
// const editUser = (id, user) => usersRepo.editUser(id, user);
// const deleteUser = (id) => usersRepo.deleteUser(id);
module.exports = { getAll };
