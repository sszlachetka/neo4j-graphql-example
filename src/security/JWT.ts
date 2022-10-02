import { sign, verify } from 'jsonwebtoken';
import * as config from '../config';

export type JWTPayload = {
  sub: string;
};

export function createJWT(data: JWTPayload): string {
  return sign(data, config.NEO4J_GRAPHQL_JWT_SECRET);
}

export function decodeJWT(token: string): JWTPayload {
  return verify(token, config.NEO4J_GRAPHQL_JWT_SECRET) as JWTPayload;
}
