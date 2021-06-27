import bcrypt from 'bcrypt';

const salt = bcrypt.genSalt(10);
const pass = '1234';

console.log(bcrypt.hash(pass, saltRounds, (err, hash) => {
  // Store hash in your password DB.
}));

export { hashPass };
