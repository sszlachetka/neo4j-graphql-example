import * as dotenv from 'dotenv';
dotenv.config();

export default function env(key: string): string {
  const value = process.env[key];
  if (value) return value;

  throw new Error(`Environment variable ${key} was not found`);
}
