import * as loginRepo from './login.repository';

const generateToken = (login: string, password: string) => loginRepo.generateToken(login, password);

export {
  generateToken,
};
