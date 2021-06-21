import { getRepository } from 'typeorm';
import { Task } from '../entities/task.entity';
import { Board } from '../entities/board.entity';
import { ITaskDTO } from './task.dto';


const getAll = async (boardId: string): Promise<Task[]> => {
  try {
    const taskRepo = getRepository(Task);
    return taskRepo.find({ where: { boardId } });
  } catch (e) {
    throw new Error(e);
  }
};

const getTaskById = async (id: string, boardId: string): Promise<Task | undefined> => {
  try {
    const taskRepo = getRepository(Task);
    const task = taskRepo.findOne(id, { where: { boardId } });
    if (!task) throw new Error("Can't find such task");
    return task;
  } catch (e) {
    throw new Error(e);
  }
};

const createTask = async (boardId: string, dto: ITaskDTO) => {
  try {
    if (!await getRepository(Board).findOne(boardId)) {
      throw new Error(`Board with ID:${boardId} doesn't exist.`)
    }
    const taskRepo = getRepository(Task);
    const newTask = taskRepo.create(dto);
    
    newTask.boardId = boardId;
    
    return taskRepo.save(newTask);
  } catch (e) {
    throw new Error(e);
  }
};

const editTask = async (dto: Omit<ITaskDTO, 'id'>, id: string, boardId: string): Promise<Task | 'NOT_FOUND'> => {
  try {
    const taskRepo = getRepository(Task);
    const taskToEdit = taskRepo.findOne(id, { where: { boardId } });
    if (taskToEdit === undefined) return 'NOT_FOUND';
    const updatedTask = await taskRepo.update(id, dto);
    return updatedTask.raw;
  } catch (e) {
    throw new Error(e);
  }
};

const deleteTask = async (id: string) => {
  try {
    const taskRepo = getRepository(Task);
    await taskRepo.delete(id);
  } catch (e) {
    throw new Error(e);
  }
};

const deleteBoardTasks = async (boardId: string) => {
  try {
    const tasks = getAll(boardId);
    if (tasks) {
      (await tasks).map((task) => {
        if (task.boardId === boardId) {
          deleteTask(task.id);
          return true;
        }
        return false;
      });
    }
  } catch (e) {
    throw new Error(e);
  }
};

export {
  getAll,
  getTaskById,
  createTask,
  editTask,
  deleteTask,
  deleteBoardTasks,
};
