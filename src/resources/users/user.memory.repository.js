const users = require('../../data/users');
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
  try {
    const index = users.indexOf((item) => item.id === id);
    users.splice(index, 1);
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = { getAll, getUserById, createUser, editUser, deleteUser };
