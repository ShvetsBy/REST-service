import bcrypt from 'bcrypt';

const saltRounds = 10;
const pass = '1234';

console.log(bcrypt.hash(pass, saltRounds, function(err, hash) {
    // Store hash in your password DB.
}));


export { hashPass }