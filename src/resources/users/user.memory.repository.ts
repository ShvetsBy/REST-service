
import { User } from './user.model.js';
import { IUser } from './user.interface';
import { ITask } from './../tasks/task.interface'


const users: IUser[] = [];
let tasks: ITask[] = [];

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
const getUserById = async (id: string) => {
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
const createUser = async (user: IUser) => {
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
const editUser = async (user: IUser, id: string) => {
  try {
    const userToEdit = users.find((object) => object.id === id);
    if (userToEdit) {
      userToEdit.name = user.name;
      userToEdit.login = user.login;
      userToEdit.password = user.password;
      return userToEdit;
    } return new Error('Failed to edit this user.')
   
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
const deleteUser = async (id: string) => {
    const index = users.findIndex((item) => item.id === id);
    users.splice(index, 1);
};

const clearTasks = async (id: string) => {
  // console.log(id);
  // console.log(tasks);
  tasks.forEach((item) => {
    console.log(item);
    if (item.userId === id) {
      item.userId = null;
    
    }
}
  )}

export {
  getAll,
  getUserById,
  createUser,
  editUser,
  deleteUser,
  clearTasks
};
