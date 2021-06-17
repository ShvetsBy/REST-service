import * as uuid from 'uuid';
import { IUser } from './user.interface';

/**
 * A class to represent a user.
@class
@constructor
* @param {String} userId – auto-generated user id
* @param {String} name –  user name
* @param {String} login –  user login
* @param {String} password – user password
*/
class User implements IUser {
  id: string | null;

  name: string;

  login: string;

  password: string;

  constructor({ name, login, password }: IUser) {
    this.id = uuid.v4();
    this.name = name;
    this.login = login;
    this.password = password;
  }

  // public static toResponse(user): UserToResponce {
  static toResponse(user: IUser) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export { User };
