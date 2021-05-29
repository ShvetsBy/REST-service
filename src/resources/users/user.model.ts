
import * as uuid from 'uuid';

// interface UserToResponce {
//   id: string;
//   name: number;
//   login: string;
// }

// interface User extends UserToResponce {
//   id: string;
//   name: number;
//   login: string;
//   password: string;
//   toResponse(): UserToResponce;
// }

/**
 * A class to represent a user.
@class
@constructor
* @param {String} userId – auto-generated user id
* @param {String} name –  user name
* @param {String} login –  user login
* @param {String} password – user password
*/
class User {
  // constructor( id: string, name: string, login: string, password: string
  constructor({ name = 'USER', login = 'user', password = 'P@55w0rd' } = {}) {
    this.id = uuid.v4();
    this.name = name;
    this.login = login;
    this.password = password;
  }

  // public static toResponse(user): UserToResponce {
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export { User };
