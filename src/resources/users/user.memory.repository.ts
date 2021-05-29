
import { User } from './user.model.js';

const users = [];
const tasks = [];

/**
 * Returns the list of app users.
 * no params required
 * @async
 * @throws {string} error message
 * @returns {Promise<Array>} List of users. Every user is an object, which contains 3 strings: id, name and login
 */
const getAll = async () => {
  try {
    return users;
  } catch (e) {
    throw new Error(e);
  }
};

/**
 * Returns one user according his uniq id.
 * @async
 * @throws {string} error message
 * @param {string} id – user uniq id.
 * @returns {Promise<Object>} List of user's properties: id, name and login.
 */
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

/**
 * Creates new user.
 * @async
 * @throws {string} error message
 * @param {Object} user – object consists of 3 items: id, name, login and password.
 * @returns {Promise<Object>} new user with id, name, login and password.
 */
const createUser = async (user) => {
  try {
    const newUser = await new User(user);

    users.push(newUser);
    return newUser;
  } catch (e) {
    throw new Error(e);
  }
};

/**
 * Edit existing user.
 * @async
 * @param {string} id – user uniq id.
 * @param {Object} user – object consists of 3 items: id, name, login and password.
 * @throws {string} error message
 * @returns {Promise<Object>} update user's id, name or login.
 */
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

/**
 * delete existing user and removes his id from tasks.
 * @async
 * @param {string} id – user uniq id.
 * @return {undefined}
 */
const deleteUser = async (id) => {
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

export {
  getAll,
  getUserById,
  createUser,
  editUser,
  deleteUser,
};