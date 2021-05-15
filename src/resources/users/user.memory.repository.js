const users = require('../../data/users');

const getAll = async () => users;

const getUserById = async (id) => {
  const user = users.filter((object) => object.id === id);
  if (!user) {
    throw new Error("Can't find such user");
  }
  return user;
};

module.exports = { getAll, getUserById };
