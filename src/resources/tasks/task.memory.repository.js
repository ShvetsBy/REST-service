const tasks = require('../../data/tasks');
const Task = require('./task.model');

const getAll = async () => {
  try {
    return tasks;
  } catch (e) {
    throw new Error(e);
  }
};

const getTaskById = async (id) => {
  try {
    const task = tasks.find((object) => object.id === id);
    if (!task) {
      throw new Error("Can't find such task");
    }
    return task;
  } catch (e) {
    throw new Error(e);
  }
};

const createTask = async (task) => {
  try {
    const newTask = await new Task(task);

    tasks.push(newTask);
    return newTask;
  } catch (e) {
    throw new Error(e);
  }
};

const editTask = async (id, task) => {
  try {
    const taskToEdit = tasks.find((object) => object.id === id);

    taskToEdit.title = task.title;
    taskToEdit.order = task.order;
    taskToEdit.description = task.description;
    taskToEdit.userId = task.userId;
    taskToEdit.boardId = task.boardId;
    taskToEdit.columnId = task.columnId;

    return taskToEdit;
  } catch (e) {
    throw new Error(e);
  }
};

const deleteTask = async (id) => {
  try {
    const index = tasks.indexOf((item) => item.id === id);
    tasks.splice(index, 1);
    return tasks;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = { getAll, getTaskById, createTask, editTask, deleteTask };
