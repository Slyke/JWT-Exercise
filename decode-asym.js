const fs = require('fs'); // Import filesystem library.
const jwt = require('jsonwebtoken'); // Import JWT library

// Load the public key into a variable so that it can be accessed in memory
var publicKey = fs.readFileSync('./certs/jwtRS256.key.pub');

// Take the first parameter passed into the script and assign it to the token variable.
const givenToken = process.argv[2];

// Using the public key, decode the given JWT and store it into the decodedToken variable. If decoding or validation fails (ie, expired token, invalid signature), this line will raise an error that can be handled by wrapping it in a try/catch block.
const decodedToken = jwt.verify(givenToken, publicKey);

// Output result
console.log(decodedToken);
