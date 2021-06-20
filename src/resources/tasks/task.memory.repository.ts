import { Task } from '../entities/task.entity';
import { Board } from '../entities/board.entity'
import { ITaskDTO } from './task.dto';
import { getRepository } from 'typeorm'

const getAll = async (boardId: string): Promise<Task[]> => {
  try {
    const taskRepo = getRepository(Task);
  return taskRepo.find({where: {boardId} });
  } catch (e) {
    throw new Error(e);
  }
  
};


const getTaskById = async (id: string, boardId: string): Promise<Task | undefined> => {
  try {
    const taskRepo = getRepository(Task);
    const task = taskRepo.findOne(id, { where: {boardId}});
    if (!task) throw new Error("Can't find such task");
    return task;
  } catch (e) {
    throw new Error(e);
  }
};


const createTask = async (boardId: string, dto: ITaskDTO) => {
  try {
    if(! await getRepository(Board).findOne(boardId)){
      throw new Error(`Board with ID:${boardId} doesn't exist.`);
    }
    const taskRepo = getRepository(Task);
    const newTask = taskRepo.create(dto);
    console.log(newTask);
    newTask.boardId = boardId;
    console.log(newTask);
    return taskRepo.save(newTask);
  } catch (e) {
    throw new Error(e);
  }
};


const editTask = async (dto: Omit<ITaskDTO,'id'>, id: string, boardId: string): Promise<Task | 'NOT_FOUND'> => {
  try {
    const taskRepo = getRepository(Task);
    const taskToEdit = taskRepo.findOne(id, { where: {boardId}});
    if (taskToEdit  === undefined) return 'NOT_FOUND';
    const updatedTask = await taskRepo.update(id, dto);
    return updatedTask.raw;  
    } 
   catch (e) {
    throw new Error(e);
  }
};

const deleteTask = async (id: string, boardId: string): Promise<void> => {
  try {
    await getRepository(Task).delete({id, boardId});
  } catch (e) {
    throw new Error(e);
  }
  
    
};


// const deleteBoardTasks = async (boardId: string) => {
//   try {
//     tasks = tasks.filter((task) => task.boardId !== boardId);
//   } catch (e) {
//     throw new Error(e);
//   }
// };

export {
  getAll,
  getTaskById,
  createTask,
  editTask,
  deleteTask,
  // deleteBoardTasks,
};
