const uuid = require('uuid');

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
  constructor({ name = 'USER', login = 'user', password = 'P@55w0rd' } = {}) {
    this.id = uuid.v4();
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
