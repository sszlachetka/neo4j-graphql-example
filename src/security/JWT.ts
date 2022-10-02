import { sign, verify } from 'jsonwebtoken';
import * as config from '../config';

export type JWTSchema = {
  sub: string;
};

export function createJWT(data: JWTSchema): string {
  return sign(data, config.NEO4J_GRAPHQL_JWT_SECRET);
}

export function decodeJWT(token: string): JWTSchema {
  return verify(token, config.NEO4J_GRAPHQL_JWT_SECRET) as JWTSchema;
}
