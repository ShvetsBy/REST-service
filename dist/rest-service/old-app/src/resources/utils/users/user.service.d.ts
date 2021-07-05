import { IUserDTO } from './user.dto';
declare const getAll: () => Promise<import("../../entities/user.intity").User[]>;
declare const getUserById: (id: string) => Promise<import("../../entities/user.intity").User>;
declare const createUser: (user: IUserDTO) => Promise<import("../../entities/user.intity").User>;
declare const editUser: (user: IUserDTO, id: string) => Promise<import("../../entities/user.intity").User | "NOT_FOUND">;
declare const deleteUser: (id: string) => Promise<void>;
declare const clearTasks: (id: string) => Promise<void>;
export { getAll, getUserById, createUser, editUser, deleteUser, clearTasks, };
