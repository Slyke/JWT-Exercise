const jwt = require('jsonwebtoken'); // Import JWT library

// Construct the object we want in the JWT
const payload = {
  user: '1234567890',
  email: 'John.Doe@domain.com'
};

// Use the first parameter passed into our script on execution, or default to ‘password’ if not given and assign it to the psk variable.
const psk = process.argv[2] || 'password';

// Use the library to generate our JWT. The line that’s commented out will generate a JWT that never expires.
// const signedToken = jwt.sign(payload, psk);
const signedToken = jwt.sign(payload, psk, { expiresIn: 30 });

// Output result
console.log({
  signedToken
});
