const users = require('../../data/users');
const tasks = require('../../data/tasks');
const User = require('./user.model');

const getAll = async () => {
  try {
    return users;
  } catch (e) {
    throw new Error(e);
  }
};

const getUserById = async (id) => {
  try {
    const user = users.find((object) => object.id === id);
    if (!user) {
      throw new Error("Can't find such user");
    }
    return user;
  } catch (e) {
    throw new Error(e);
  }
};

const createUser = async (user) => {
  try {
    const newUser = await new User(user);

    users.push(newUser);
    return newUser;
  } catch (e) {
    throw new Error(e);
  }
};

const editUser = async (id, user) => {
  try {
    const userToEdit = users.find((object) => object.id === id);

    userToEdit.name = user.name;
    userToEdit.login = user.login;
    userToEdit.password = user.password;

    return userToEdit;
  } catch (e) {
    throw new Error(e);
  }
};

const deleteUser = async (id) => {
  // TODO delete try-catch
  try {
    const index = users.indexOf((item) => item.id === id);
    users.splice(index, 1);
    tasks.forEach((item) => {
      const task = item;
      if (task.userId === id) {
        task.userId = null;
      }
    });
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  getAll,
  getUserById,
  createUser,
  editUser,
  deleteUser,
};
