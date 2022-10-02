import { pbkdf2Sync, randomBytes } from 'crypto';

const ITERATIONS = 1000;
const KEYLEN = 64;
const DIGEST = 'sha512';
const ENCODING = 'hex';

export function comparePassword(
  plainTextPassword: string,
  hash: string,
  salt: string
): boolean {
  const hashedPassword = pbkdf2Sync(
    plainTextPassword,
    salt,
    ITERATIONS,
    KEYLEN,
    DIGEST
  ).toString(ENCODING);

  return hashedPassword === hash;
}

export function hashPassword(plainTextPassword: string): {
  passwordHash: string;
  passwordSalt: string;
} {
  const passwordSalt = randomBytes(16).toString(ENCODING);

  const passwordHash = pbkdf2Sync(
    plainTextPassword,
    passwordSalt,
    ITERATIONS,
    KEYLEN,
    DIGEST
  ).toString(ENCODING);

  return {
    passwordSalt,
    passwordHash,
  };
}
