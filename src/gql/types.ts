import { OGM } from '@neo4j/graphql-ogm';
import { JWTPayload } from '../security/JWT';

export type ServerContext = {
  ogm: OGM;
  auth: {
    jwt: JWTPayload
  }
};
