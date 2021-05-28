let tasks = require('../../data/tasks');
const Task = require('./task.model');

/**
 * Returns the list of tasks.
 * no params required
 * @async
 * @throws {string} error message
 * @returns {Promise<Array>} List of tasks. Every task is an object, which contains 5 items: "id": "string", "title": string, "order": number, "description": "string", "userId": "string"
 */
const getAll = async () => {
  try {
    return tasks;
  } catch (e) {
    throw new Error(e);
  }
};

/**
 * Returns one specific task by id.
 * @async
 * @param {string} id – board id.
 * @throws {string} error message
 * @returns {Promise<Object>} Object with task content: id, title, order, description and userid.
 */
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

/**
 * Creates new task.
 * @async
 * @param {Object} task – object consists of 6 items: "title, "order", "description", "userId", "boardId","columnId"
 * @throws {string} error message
 * @returns {Promise<Object>} new task.
 */
const createTask = async (task, boardId) => {
  try {
    const newTask = await new Task(task);
    newTask.boardId = boardId;
    tasks.push(newTask);
    return newTask;
  } catch (e) {
    throw new Error(e);
  }
};

/**
 * update task's items.
 * @async
 * @param {string} id – task uniq id.
 * @param {Object} task – object consists of 6 items: "title, "order", "description", "userId", "boardId","columnId"
 * @throws {string} error message
 * @returns {Promise<Object>} updated task.
 */
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

/**
 * Delete existing task.
 * @async
 * @param {string} id – task uniq id.
 * @return {undefined}
 */
const deleteTask = async (id) => {
  const TaskoDelete = tasks.find((object) => object.id === id);
  if (TaskoDelete) {
    const index = tasks.findIndex((item) => item.id === id);
    tasks.splice(index, 1);
  }
};

/**
 * Delete all tasks from selected board.
 * @async
 * @param {string} boardId – board uniq id.
 * @return {undefined}
 */
const deleteBoardTasks = async (boardId) => {
  tasks = tasks.filter((task) => task.boardId !== boardId);
};

module.exports = {
  getAll,
  getTaskById,
  createTask,
  editTask,
  deleteTask,
  deleteBoardTasks,
};
