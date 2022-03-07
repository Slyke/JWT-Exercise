/*
*********************************
WARNING: DO NOT USE IN PRODUCTION
*********************************

This code is only for the use of explaining the concepts of JWTs and should not be used in production.

THIS CODE IS *NOT* SECURE.
*/

const crypto = require('crypto');

const header = {
  alg: 'fake',
  typ: 'JWT'
};

const payload = {
  user: '1234567890',
  email: 'John.Doe@domain.com',
  iat: Math.round(new Date().getTime() / 1000)
};

const psk = 'mySup3rs3CretPas5w0rd';

const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64');
const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64');

const signaturePrehash = encodedHeader.toString() + '.' + encodedPayload + '.' + psk; // DO NOT USE IN PRODUCTION
const signature = crypto.createHash('sha256').update(signaturePrehash).digest('base64'); // DO NOT USE IN PRODUCTION

const output = encodedHeader + '.' + encodedPayload + '.' + signature;

console.log({
  output
});

