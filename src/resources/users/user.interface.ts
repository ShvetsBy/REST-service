export interface IUser {
    id: string | number | null;
    name: string;
    login: string;
    password: string;
    // toResponse(): IUserHiddenPassword;
  }
