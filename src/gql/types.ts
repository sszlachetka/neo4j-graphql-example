import { OGM } from '@neo4j/graphql-ogm';
import { JWTPayload } from '../security/JWT';
import { ModelMap } from './ogm-types';

export type ServerContext = {
  ogm: OGM<ModelMap>;
  token: string | null;
  jwtPayload: JWTPayload | null;
};
