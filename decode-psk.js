const jwt = require('jsonwebtoken'); // Import JWT library

const psk = process.argv[2]; // Take the first parameter passed into the script and assign to the psk variable.
const givenToken = process.argv[3]; // Take the second parameter passed into the script and assign it to the givenToken variable.

// Pass the token and psk variables into the verify function. If decoding or validation fails (ie, expired token, invalid signature), this line will raise an error that can be handled by wrapping it in a try/catch block.
const decodedToken = jwt.verify(givenToken, psk);

// Output result.
console.log(decodedToken);
