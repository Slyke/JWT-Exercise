# JWT Examples

## Making and Reading a JWT
Run and read these to understand how JWTs are generated.

### Backyard JWT

This code is not meant for production. Run it to generate something like a JWT
```
node backyard-jwts/example-self-encode.js
```

Run this to decodet a JWT with no validation on signature or expirey

```
node backyard-jwts/jwt-parts.js
```

## Encoding a JWT

### Using the jsonwebtoken npm module.

This will encode and correctly sign a JWT with a psk.
```
node encode-psk.js {PSK=asdf}
```

This will encode and sign a JWT with a asymmetric key pair (aka "ssl certs", "private public keypair"). Ensure you've generated your keypairs before running.

```
node encode-asym.js
```

## Decoding a JWT

### Using the jsonwebtoken npm module.

This will encode and correctly sign a JWT with a psk.
```
node decode-psk.js {PSK=asdf}
```

This will encode and sign a JWT with a asymmetric key pair (aka "ssl certs", "private public keypair").

```
node decode-asym.js {TOKEN}
```

## Generate Keypair
Run the following commands while inside the `certs` directory

```
ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key
openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub
```
