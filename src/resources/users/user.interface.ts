// export interface IUserHiddenPassword {
//   id?: string;
//   name?: number;
//   login?: string;
// }

export interface IUser {
    id?: string;
    name: string;
    login: string;
    password: string; 
    // toResponse(): IUserHiddenPassword;
  };