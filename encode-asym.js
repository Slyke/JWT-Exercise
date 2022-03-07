const fs = require('fs'); ); // Import filesystem library.
const jwt = require('jsonwebtoken'); // Import JWT library

// Construct the object we want in the JWT
const payload = {
  user: '1234567890',
  email: 'John.Doe@domain.com'
};

// Load the private key into a variable so that it can be accessed in memory
var privateKey = fs.readFileSync('./certs/jwtRS256.key.pub');  // get private key

// Use the library to generate our JWT. The line that’s commented out will generate a JWT that never expires. Specifying the algorithm is important when using asymmetric algorithms
const signedToken = jwt.sign(payload, privateKey, { algorithm: 'RS256'});
// const signedToken = jwt.sign(payload, psk, { expiresIn: 30, { algorithm: 'RS256'} });

// Output result
console.log({
  signedToken
});
