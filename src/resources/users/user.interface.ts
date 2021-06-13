// export interface IUserHiddenPassword {
//   id?: string;
//   name?: number;
//   login?: string;
// }

export interface IUser {
    id: string | null;
    name: string;
    login: string;
    password: string; 
    // toResponse(): IUserHiddenPassword;
  };