const exampleJwt = process.argv[2] || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMTIzNDU2Nzg5MCIsImVtYWlsIjoiSm9obi5Eb2VAZG9tYWluLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.OMJWCUZHCiqYqxvKHe2rZAA-a1hN00wLZQ94qHMobW8";

const brokenUpJwt = exampleJwt.split('.');

if (brokenUpJwt.length !== 3) {
  console.error(`JWT pieces count: ${brokenUpJwt.length}`);
  console.error('Given JWT: ');
  console.error(exampleJwt);
  console.error('');
  throw new Error('Provided string is not a JWT');
}

const [headerEncoded, payloadEncoded, signature] = brokenUpJwt;

// Header
const headerDecoded = Buffer.from(headerEncoded, 'base64').toString('ascii'); // toString('ascii') is required to change from byte stream to string.
let headerParsed;
try {
  headerParsed = JSON.parse(headerDecoded);
} catch (err) {
  console.error('Could not parse header! Check that it is a stringified JSON object.');
  console.error(err);
}

// Payload
const payloadDecoded = Buffer.from(payloadEncoded, 'base64').toString('ascii');
let payloadParsed = payloadDecoded;
try {
  payloadParsed = JSON.parse(payloadDecoded);
} catch (err) {
  console.error('Could not parse payload! Check that it is a stringified JSON object. Will use raw payload.');
  console.error(err);
}

console.log('Header', {
  headerEncoded,
  headerDecoded,
  headerParsed
});

console.log('');

console.log('Payload', {
  payloadEncoded,
  payloadDecoded,
  payloadParsed
});
