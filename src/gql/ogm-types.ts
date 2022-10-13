import type { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date and time, represented as an ISO-8601 string */
  DateTime: any;
};

export type Query = {
  __typename?: "Query";
  movies: Array<Movie>;
  moviesAggregate: MovieAggregateSelection;
  moviesConnection: MoviesConnection;
  people: Array<Person>;
  peopleAggregate: PersonAggregateSelection;
  peopleConnection: PeopleConnection;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
};

export type QueryMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  options?: InputMaybe<MovieOptions>;
};

export type QueryMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
};

export type QueryMoviesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<MovieWhere>;
  sort?: InputMaybe<Array<InputMaybe<MovieSort>>>;
};

export type QueryPeopleArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
};

export type QueryPeopleAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
};

export type QueryPeopleConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<PersonWhere>;
  sort?: InputMaybe<Array<InputMaybe<PersonSort>>>;
};

export type QueryUsersArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
};

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};

export type QueryUsersConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<UserWhere>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

export type Mutation = {
  __typename?: "Mutation";
  signUp: Scalars["String"];
  signIn: Scalars["String"];
  rateMovie: Scalars["ID"];
  createMovies: CreateMoviesMutationResponse;
  deleteMovies: DeleteInfo;
  updateMovies: UpdateMoviesMutationResponse;
  createPeople: CreatePeopleMutationResponse;
  deletePeople: DeleteInfo;
  updatePeople: UpdatePeopleMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteUsers: DeleteInfo;
  updateUsers: UpdateUsersMutationResponse;
};

export type MutationSignUpArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationSignInArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationRateMovieArgs = {
  movieTitle: Scalars["String"];
  rating: Scalars["Int"];
};

export type MutationCreateMoviesArgs = {
  input: Array<MovieCreateInput>;
};

export type MutationDeleteMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  delete?: InputMaybe<MovieDeleteInput>;
};

export type MutationUpdateMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  update?: InputMaybe<MovieUpdateInput>;
  connect?: InputMaybe<MovieConnectInput>;
  disconnect?: InputMaybe<MovieDisconnectInput>;
  create?: InputMaybe<MovieRelationInput>;
  delete?: InputMaybe<MovieDeleteInput>;
};

export type MutationCreatePeopleArgs = {
  input: Array<PersonCreateInput>;
};

export type MutationDeletePeopleArgs = {
  where?: InputMaybe<PersonWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type MutationUpdatePeopleArgs = {
  where?: InputMaybe<PersonWhere>;
  update?: InputMaybe<PersonUpdateInput>;
  connect?: InputMaybe<PersonConnectInput>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
  create?: InputMaybe<PersonRelationInput>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteUsersArgs = {
  where?: InputMaybe<UserWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type MutationUpdateUsersArgs = {
  where?: InputMaybe<UserWhere>;
  update?: InputMaybe<UserUpdateInput>;
  connect?: InputMaybe<UserConnectInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type ActedIn = {
  roles?: Maybe<Array<Scalars["String"]>>;
};

export type Rated = {
  rating: Scalars["Int"];
};

export type CreateInfo = {
  __typename?: "CreateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
};

export type CreateMoviesMutationResponse = {
  __typename?: "CreateMoviesMutationResponse";
  info: CreateInfo;
  movies: Array<Movie>;
};

export type CreatePeopleMutationResponse = {
  __typename?: "CreatePeopleMutationResponse";
  info: CreateInfo;
  people: Array<Person>;
};

export type CreateUsersMutationResponse = {
  __typename?: "CreateUsersMutationResponse";
  info: CreateInfo;
  users: Array<User>;
};

export type DateTimeAggregateSelectionNullable = {
  __typename?: "DateTimeAggregateSelectionNullable";
  min?: Maybe<Scalars["DateTime"]>;
  max?: Maybe<Scalars["DateTime"]>;
};

export type DeleteInfo = {
  __typename?: "DeleteInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesDeleted: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: "IDAggregateSelectionNonNullable";
  shortest: Scalars["ID"];
  longest: Scalars["ID"];
};

export type IntAggregateSelectionNonNullable = {
  __typename?: "IntAggregateSelectionNonNullable";
  max: Scalars["Int"];
  min: Scalars["Int"];
  average: Scalars["Float"];
  sum: Scalars["Int"];
};

export type IntAggregateSelectionNullable = {
  __typename?: "IntAggregateSelectionNullable";
  max?: Maybe<Scalars["Int"]>;
  min?: Maybe<Scalars["Int"]>;
  average?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Int"]>;
};

export type Movie = {
  __typename?: "Movie";
  title: Scalars["String"];
  released: Scalars["Int"];
  actors: Array<Person>;
  actorsAggregate?: Maybe<MoviePersonActorsAggregationSelection>;
  director: Person;
  directorAggregate?: Maybe<MoviePersonDirectorAggregationSelection>;
  actorsConnection: MovieActorsConnection;
  directorConnection: MovieDirectorConnection;
};

export type MovieActorsArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type MovieActorsAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type MovieDirectorArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type MovieDirectorAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type MovieActorsConnectionArgs = {
  where?: InputMaybe<MovieActorsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<MovieActorsConnectionSort>>;
};

export type MovieDirectorConnectionArgs = {
  where?: InputMaybe<MovieDirectorConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<MovieDirectorConnectionSort>>;
};

export type MovieActorsConnection = {
  __typename?: "MovieActorsConnection";
  edges: Array<MovieActorsRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type MovieActorsRelationship = ActedIn & {
  __typename?: "MovieActorsRelationship";
  cursor: Scalars["String"];
  node: Person;
  roles?: Maybe<Array<Scalars["String"]>>;
};

export type MovieAggregateSelection = {
  __typename?: "MovieAggregateSelection";
  count: Scalars["Int"];
  title: StringAggregateSelectionNonNullable;
  released: IntAggregateSelectionNonNullable;
};

export type MovieDirectorConnection = {
  __typename?: "MovieDirectorConnection";
  edges: Array<MovieDirectorRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type MovieDirectorRelationship = {
  __typename?: "MovieDirectorRelationship";
  cursor: Scalars["String"];
  node: Person;
};

export type MovieEdge = {
  __typename?: "MovieEdge";
  cursor: Scalars["String"];
  node: Movie;
};

export type MoviePersonActorsAggregationSelection = {
  __typename?: "MoviePersonActorsAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<MoviePersonActorsNodeAggregateSelection>;
};

export type MoviePersonActorsNodeAggregateSelection = {
  __typename?: "MoviePersonActorsNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  born: IntAggregateSelectionNullable;
};

export type MoviePersonDirectorAggregationSelection = {
  __typename?: "MoviePersonDirectorAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<MoviePersonDirectorNodeAggregateSelection>;
};

export type MoviePersonDirectorNodeAggregateSelection = {
  __typename?: "MoviePersonDirectorNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  born: IntAggregateSelectionNullable;
};

export type MoviesConnection = {
  __typename?: "MoviesConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<MovieEdge>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
  endCursor?: Maybe<Scalars["String"]>;
};

export type PeopleConnection = {
  __typename?: "PeopleConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<PersonEdge>;
};

export type Person = {
  __typename?: "Person";
  name: Scalars["String"];
  born?: Maybe<Scalars["Int"]>;
  age?: Maybe<Scalars["Int"]>;
  actedInMovies: Array<Movie>;
  actedInMoviesAggregate?: Maybe<PersonMovieActedInMoviesAggregationSelection>;
  directedMovies: Array<Movie>;
  directedMoviesAggregate?: Maybe<PersonMovieDirectedMoviesAggregationSelection>;
  actedInMoviesConnection: PersonActedInMoviesConnection;
  directedMoviesConnection: PersonDirectedMoviesConnection;
};

export type PersonActedInMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  options?: InputMaybe<MovieOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type PersonActedInMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type PersonDirectedMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  options?: InputMaybe<MovieOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type PersonDirectedMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type PersonActedInMoviesConnectionArgs = {
  where?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<PersonActedInMoviesConnectionSort>>;
};

export type PersonDirectedMoviesConnectionArgs = {
  where?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<PersonDirectedMoviesConnectionSort>>;
};

export type PersonActedInMoviesConnection = {
  __typename?: "PersonActedInMoviesConnection";
  edges: Array<PersonActedInMoviesRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type PersonActedInMoviesRelationship = ActedIn & {
  __typename?: "PersonActedInMoviesRelationship";
  cursor: Scalars["String"];
  node: Movie;
  roles?: Maybe<Array<Scalars["String"]>>;
};

export type PersonAggregateSelection = {
  __typename?: "PersonAggregateSelection";
  count: Scalars["Int"];
  name: StringAggregateSelectionNonNullable;
  born: IntAggregateSelectionNullable;
};

export type PersonDirectedMoviesConnection = {
  __typename?: "PersonDirectedMoviesConnection";
  edges: Array<PersonDirectedMoviesRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type PersonDirectedMoviesRelationship = {
  __typename?: "PersonDirectedMoviesRelationship";
  cursor: Scalars["String"];
  node: Movie;
};

export type PersonEdge = {
  __typename?: "PersonEdge";
  cursor: Scalars["String"];
  node: Person;
};

export type PersonMovieActedInMoviesAggregationSelection = {
  __typename?: "PersonMovieActedInMoviesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<PersonMovieActedInMoviesNodeAggregateSelection>;
};

export type PersonMovieActedInMoviesNodeAggregateSelection = {
  __typename?: "PersonMovieActedInMoviesNodeAggregateSelection";
  title: StringAggregateSelectionNonNullable;
  released: IntAggregateSelectionNonNullable;
};

export type PersonMovieDirectedMoviesAggregationSelection = {
  __typename?: "PersonMovieDirectedMoviesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<PersonMovieDirectedMoviesNodeAggregateSelection>;
};

export type PersonMovieDirectedMoviesNodeAggregateSelection = {
  __typename?: "PersonMovieDirectedMoviesNodeAggregateSelection";
  title: StringAggregateSelectionNonNullable;
  released: IntAggregateSelectionNonNullable;
};

export type StringAggregateSelectionNonNullable = {
  __typename?: "StringAggregateSelectionNonNullable";
  shortest: Scalars["String"];
  longest: Scalars["String"];
};

export type UpdateInfo = {
  __typename?: "UpdateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  nodesDeleted: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type UpdateMoviesMutationResponse = {
  __typename?: "UpdateMoviesMutationResponse";
  info: UpdateInfo;
  movies: Array<Movie>;
};

export type UpdatePeopleMutationResponse = {
  __typename?: "UpdatePeopleMutationResponse";
  info: UpdateInfo;
  people: Array<Person>;
};

export type UpdateUsersMutationResponse = {
  __typename?: "UpdateUsersMutationResponse";
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  email: Scalars["String"];
  passwordHash: Scalars["String"];
  passwordSalt: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  ratedMovies: Array<Movie>;
  ratedMoviesAggregate?: Maybe<UserMovieRatedMoviesAggregationSelection>;
  ratedMoviesConnection: UserRatedMoviesConnection;
};

export type UserRatedMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  options?: InputMaybe<MovieOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserRatedMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserRatedMoviesConnectionArgs = {
  where?: InputMaybe<UserRatedMoviesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<UserRatedMoviesConnectionSort>>;
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  passwordHash: StringAggregateSelectionNonNullable;
  passwordSalt: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"];
  node: User;
};

export type UserMovieRatedMoviesAggregationSelection = {
  __typename?: "UserMovieRatedMoviesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<UserMovieRatedMoviesNodeAggregateSelection>;
  edge?: Maybe<UserMovieRatedMoviesEdgeAggregateSelection>;
};

export type UserMovieRatedMoviesEdgeAggregateSelection = {
  __typename?: "UserMovieRatedMoviesEdgeAggregateSelection";
  rating: IntAggregateSelectionNonNullable;
};

export type UserMovieRatedMoviesNodeAggregateSelection = {
  __typename?: "UserMovieRatedMoviesNodeAggregateSelection";
  title: StringAggregateSelectionNonNullable;
  released: IntAggregateSelectionNonNullable;
};

export type UserRatedMoviesConnection = {
  __typename?: "UserRatedMoviesConnection";
  edges: Array<UserRatedMoviesRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type UserRatedMoviesRelationship = Rated & {
  __typename?: "UserRatedMoviesRelationship";
  cursor: Scalars["String"];
  node: Movie;
  rating: Scalars["Int"];
};

export type UsersConnection = {
  __typename?: "UsersConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
};

export type ActedInCreateInput = {
  roles?: InputMaybe<Array<Scalars["String"]>>;
};

export type ActedInSort = {
  roles?: InputMaybe<SortDirection>;
};

export type ActedInUpdateInput = {
  roles?: InputMaybe<Array<Scalars["String"]>>;
  roles_POP?: InputMaybe<Scalars["Int"]>;
  roles_PUSH?: InputMaybe<Array<Scalars["String"]>>;
};

export type ActedInWhere = {
  OR?: InputMaybe<Array<ActedInWhere>>;
  AND?: InputMaybe<Array<ActedInWhere>>;
  roles?: InputMaybe<Array<Scalars["String"]>>;
  roles_NOT?: InputMaybe<Array<Scalars["String"]>>;
  roles_INCLUDES?: InputMaybe<Scalars["String"]>;
  roles_NOT_INCLUDES?: InputMaybe<Scalars["String"]>;
};

export type MovieActorsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<MovieActorsAggregateInput>>;
  OR?: InputMaybe<Array<MovieActorsAggregateInput>>;
  node?: InputMaybe<MovieActorsNodeAggregationWhereInput>;
};

export type MovieActorsConnectFieldInput = {
  where?: InputMaybe<PersonConnectWhere>;
  connect?: InputMaybe<Array<PersonConnectInput>>;
  edge?: InputMaybe<ActedInCreateInput>;
};

export type MovieActorsConnectionSort = {
  edge?: InputMaybe<ActedInSort>;
  node?: InputMaybe<PersonSort>;
};

export type MovieActorsConnectionWhere = {
  AND?: InputMaybe<Array<MovieActorsConnectionWhere>>;
  OR?: InputMaybe<Array<MovieActorsConnectionWhere>>;
  edge?: InputMaybe<ActedInWhere>;
  edge_NOT?: InputMaybe<ActedInWhere>;
  node?: InputMaybe<PersonWhere>;
  node_NOT?: InputMaybe<PersonWhere>;
};

export type MovieActorsCreateFieldInput = {
  node: PersonCreateInput;
  edge?: InputMaybe<ActedInCreateInput>;
};

export type MovieActorsDeleteFieldInput = {
  where?: InputMaybe<MovieActorsConnectionWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type MovieActorsDisconnectFieldInput = {
  where?: InputMaybe<MovieActorsConnectionWhere>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
};

export type MovieActorsFieldInput = {
  create?: InputMaybe<Array<MovieActorsCreateFieldInput>>;
  connect?: InputMaybe<Array<MovieActorsConnectFieldInput>>;
};

export type MovieActorsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MovieActorsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MovieActorsNodeAggregationWhereInput>>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  born_EQUAL?: InputMaybe<Scalars["Int"]>;
  born_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  born_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  born_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  born_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  born_GT?: InputMaybe<Scalars["Int"]>;
  born_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  born_MIN_GT?: InputMaybe<Scalars["Int"]>;
  born_MAX_GT?: InputMaybe<Scalars["Int"]>;
  born_SUM_GT?: InputMaybe<Scalars["Int"]>;
  born_GTE?: InputMaybe<Scalars["Int"]>;
  born_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  born_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  born_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  born_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  born_LT?: InputMaybe<Scalars["Int"]>;
  born_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  born_MIN_LT?: InputMaybe<Scalars["Int"]>;
  born_MAX_LT?: InputMaybe<Scalars["Int"]>;
  born_SUM_LT?: InputMaybe<Scalars["Int"]>;
  born_LTE?: InputMaybe<Scalars["Int"]>;
  born_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  born_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  born_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  born_SUM_LTE?: InputMaybe<Scalars["Int"]>;
};

export type MovieActorsUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
  edge?: InputMaybe<ActedInUpdateInput>;
};

export type MovieActorsUpdateFieldInput = {
  where?: InputMaybe<MovieActorsConnectionWhere>;
  update?: InputMaybe<MovieActorsUpdateConnectionInput>;
  connect?: InputMaybe<Array<MovieActorsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<MovieActorsDisconnectFieldInput>>;
  create?: InputMaybe<Array<MovieActorsCreateFieldInput>>;
  delete?: InputMaybe<Array<MovieActorsDeleteFieldInput>>;
};

export type MovieConnectInput = {
  actors?: InputMaybe<Array<MovieActorsConnectFieldInput>>;
  director?: InputMaybe<MovieDirectorConnectFieldInput>;
};

export type MovieConnectWhere = {
  node: MovieWhere;
};

export type MovieCreateInput = {
  title: Scalars["String"];
  released: Scalars["Int"];
  actors?: InputMaybe<MovieActorsFieldInput>;
  director?: InputMaybe<MovieDirectorFieldInput>;
};

export type MovieDeleteInput = {
  actors?: InputMaybe<Array<MovieActorsDeleteFieldInput>>;
  director?: InputMaybe<MovieDirectorDeleteFieldInput>;
};

export type MovieDirectorAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<MovieDirectorAggregateInput>>;
  OR?: InputMaybe<Array<MovieDirectorAggregateInput>>;
  node?: InputMaybe<MovieDirectorNodeAggregationWhereInput>;
};

export type MovieDirectorConnectFieldInput = {
  where?: InputMaybe<PersonConnectWhere>;
  connect?: InputMaybe<PersonConnectInput>;
};

export type MovieDirectorConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type MovieDirectorConnectionWhere = {
  AND?: InputMaybe<Array<MovieDirectorConnectionWhere>>;
  OR?: InputMaybe<Array<MovieDirectorConnectionWhere>>;
  node?: InputMaybe<PersonWhere>;
  node_NOT?: InputMaybe<PersonWhere>;
};

export type MovieDirectorCreateFieldInput = {
  node: PersonCreateInput;
};

export type MovieDirectorDeleteFieldInput = {
  where?: InputMaybe<MovieDirectorConnectionWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type MovieDirectorDisconnectFieldInput = {
  where?: InputMaybe<MovieDirectorConnectionWhere>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
};

export type MovieDirectorFieldInput = {
  create?: InputMaybe<MovieDirectorCreateFieldInput>;
  connect?: InputMaybe<MovieDirectorConnectFieldInput>;
};

export type MovieDirectorNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MovieDirectorNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MovieDirectorNodeAggregationWhereInput>>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  born_EQUAL?: InputMaybe<Scalars["Int"]>;
  born_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  born_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  born_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  born_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  born_GT?: InputMaybe<Scalars["Int"]>;
  born_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  born_MIN_GT?: InputMaybe<Scalars["Int"]>;
  born_MAX_GT?: InputMaybe<Scalars["Int"]>;
  born_SUM_GT?: InputMaybe<Scalars["Int"]>;
  born_GTE?: InputMaybe<Scalars["Int"]>;
  born_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  born_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  born_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  born_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  born_LT?: InputMaybe<Scalars["Int"]>;
  born_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  born_MIN_LT?: InputMaybe<Scalars["Int"]>;
  born_MAX_LT?: InputMaybe<Scalars["Int"]>;
  born_SUM_LT?: InputMaybe<Scalars["Int"]>;
  born_LTE?: InputMaybe<Scalars["Int"]>;
  born_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  born_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  born_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  born_SUM_LTE?: InputMaybe<Scalars["Int"]>;
};

export type MovieDirectorUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type MovieDirectorUpdateFieldInput = {
  where?: InputMaybe<MovieDirectorConnectionWhere>;
  update?: InputMaybe<MovieDirectorUpdateConnectionInput>;
  connect?: InputMaybe<MovieDirectorConnectFieldInput>;
  disconnect?: InputMaybe<MovieDirectorDisconnectFieldInput>;
  create?: InputMaybe<MovieDirectorCreateFieldInput>;
  delete?: InputMaybe<MovieDirectorDeleteFieldInput>;
};

export type MovieDisconnectInput = {
  actors?: InputMaybe<Array<MovieActorsDisconnectFieldInput>>;
  director?: InputMaybe<MovieDirectorDisconnectFieldInput>;
};

export type MovieOptions = {
  /** Specify one or more MovieSort objects to sort Movies by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MovieSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type MovieRelationInput = {
  actors?: InputMaybe<Array<MovieActorsCreateFieldInput>>;
  director?: InputMaybe<MovieDirectorCreateFieldInput>;
};

/** Fields to sort Movies by. The order in which sorts are applied is not guaranteed when specifying many fields in one MovieSort object. */
export type MovieSort = {
  title?: InputMaybe<SortDirection>;
  released?: InputMaybe<SortDirection>;
};

export type MovieUpdateInput = {
  title?: InputMaybe<Scalars["String"]>;
  released?: InputMaybe<Scalars["Int"]>;
  released_INCREMENT?: InputMaybe<Scalars["Int"]>;
  released_DECREMENT?: InputMaybe<Scalars["Int"]>;
  actors?: InputMaybe<Array<MovieActorsUpdateFieldInput>>;
  director?: InputMaybe<MovieDirectorUpdateFieldInput>;
};

export type MovieWhere = {
  OR?: InputMaybe<Array<MovieWhere>>;
  AND?: InputMaybe<Array<MovieWhere>>;
  title?: InputMaybe<Scalars["String"]>;
  title_NOT?: InputMaybe<Scalars["String"]>;
  title_IN?: InputMaybe<Array<Scalars["String"]>>;
  title_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  title_CONTAINS?: InputMaybe<Scalars["String"]>;
  title_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  title_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  title_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  title_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  title_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  released?: InputMaybe<Scalars["Int"]>;
  released_NOT?: InputMaybe<Scalars["Int"]>;
  released_IN?: InputMaybe<Array<Scalars["Int"]>>;
  released_NOT_IN?: InputMaybe<Array<Scalars["Int"]>>;
  released_LT?: InputMaybe<Scalars["Int"]>;
  released_LTE?: InputMaybe<Scalars["Int"]>;
  released_GT?: InputMaybe<Scalars["Int"]>;
  released_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Use `actors_SOME` instead. */
  actors?: InputMaybe<PersonWhere>;
  /** @deprecated Use `actors_NONE` instead. */
  actors_NOT?: InputMaybe<PersonWhere>;
  actorsAggregate?: InputMaybe<MovieActorsAggregateInput>;
  /** Return Movies where all of the related People match this filter */
  actors_ALL?: InputMaybe<PersonWhere>;
  /** Return Movies where none of the related People match this filter */
  actors_NONE?: InputMaybe<PersonWhere>;
  /** Return Movies where one of the related People match this filter */
  actors_SINGLE?: InputMaybe<PersonWhere>;
  /** Return Movies where some of the related People match this filter */
  actors_SOME?: InputMaybe<PersonWhere>;
  director?: InputMaybe<PersonWhere>;
  director_NOT?: InputMaybe<PersonWhere>;
  directorAggregate?: InputMaybe<MovieDirectorAggregateInput>;
  /** @deprecated Use `actorsConnection_SOME` instead. */
  actorsConnection?: InputMaybe<MovieActorsConnectionWhere>;
  /** @deprecated Use `actorsConnection_NONE` instead. */
  actorsConnection_NOT?: InputMaybe<MovieActorsConnectionWhere>;
  actorsConnection_ALL?: InputMaybe<MovieActorsConnectionWhere>;
  actorsConnection_NONE?: InputMaybe<MovieActorsConnectionWhere>;
  actorsConnection_SINGLE?: InputMaybe<MovieActorsConnectionWhere>;
  actorsConnection_SOME?: InputMaybe<MovieActorsConnectionWhere>;
  directorConnection?: InputMaybe<MovieDirectorConnectionWhere>;
  directorConnection_NOT?: InputMaybe<MovieDirectorConnectionWhere>;
};

export type PersonActedInMoviesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<PersonActedInMoviesAggregateInput>>;
  OR?: InputMaybe<Array<PersonActedInMoviesAggregateInput>>;
  node?: InputMaybe<PersonActedInMoviesNodeAggregationWhereInput>;
};

export type PersonActedInMoviesConnectFieldInput = {
  where?: InputMaybe<MovieConnectWhere>;
  connect?: InputMaybe<Array<MovieConnectInput>>;
  edge?: InputMaybe<ActedInCreateInput>;
};

export type PersonActedInMoviesConnectionSort = {
  edge?: InputMaybe<ActedInSort>;
  node?: InputMaybe<MovieSort>;
};

export type PersonActedInMoviesConnectionWhere = {
  AND?: InputMaybe<Array<PersonActedInMoviesConnectionWhere>>;
  OR?: InputMaybe<Array<PersonActedInMoviesConnectionWhere>>;
  edge?: InputMaybe<ActedInWhere>;
  edge_NOT?: InputMaybe<ActedInWhere>;
  node?: InputMaybe<MovieWhere>;
  node_NOT?: InputMaybe<MovieWhere>;
};

export type PersonActedInMoviesCreateFieldInput = {
  node: MovieCreateInput;
  edge?: InputMaybe<ActedInCreateInput>;
};

export type PersonActedInMoviesDeleteFieldInput = {
  where?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  delete?: InputMaybe<MovieDeleteInput>;
};

export type PersonActedInMoviesDisconnectFieldInput = {
  where?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  disconnect?: InputMaybe<MovieDisconnectInput>;
};

export type PersonActedInMoviesFieldInput = {
  create?: InputMaybe<Array<PersonActedInMoviesCreateFieldInput>>;
  connect?: InputMaybe<Array<PersonActedInMoviesConnectFieldInput>>;
};

export type PersonActedInMoviesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonActedInMoviesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonActedInMoviesNodeAggregationWhereInput>>;
  title_EQUAL?: InputMaybe<Scalars["String"]>;
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_GT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  title_GTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_LT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  title_LTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  released_EQUAL?: InputMaybe<Scalars["Int"]>;
  released_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  released_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  released_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  released_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  released_GT?: InputMaybe<Scalars["Int"]>;
  released_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  released_MIN_GT?: InputMaybe<Scalars["Int"]>;
  released_MAX_GT?: InputMaybe<Scalars["Int"]>;
  released_SUM_GT?: InputMaybe<Scalars["Int"]>;
  released_GTE?: InputMaybe<Scalars["Int"]>;
  released_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  released_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  released_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  released_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  released_LT?: InputMaybe<Scalars["Int"]>;
  released_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  released_MIN_LT?: InputMaybe<Scalars["Int"]>;
  released_MAX_LT?: InputMaybe<Scalars["Int"]>;
  released_SUM_LT?: InputMaybe<Scalars["Int"]>;
  released_LTE?: InputMaybe<Scalars["Int"]>;
  released_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  released_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  released_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  released_SUM_LTE?: InputMaybe<Scalars["Int"]>;
};

export type PersonActedInMoviesUpdateConnectionInput = {
  node?: InputMaybe<MovieUpdateInput>;
  edge?: InputMaybe<ActedInUpdateInput>;
};

export type PersonActedInMoviesUpdateFieldInput = {
  where?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  update?: InputMaybe<PersonActedInMoviesUpdateConnectionInput>;
  connect?: InputMaybe<Array<PersonActedInMoviesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PersonActedInMoviesDisconnectFieldInput>>;
  create?: InputMaybe<Array<PersonActedInMoviesCreateFieldInput>>;
  delete?: InputMaybe<Array<PersonActedInMoviesDeleteFieldInput>>;
};

export type PersonConnectInput = {
  actedInMovies?: InputMaybe<Array<PersonActedInMoviesConnectFieldInput>>;
  directedMovies?: InputMaybe<Array<PersonDirectedMoviesConnectFieldInput>>;
};

export type PersonConnectWhere = {
  node: PersonWhere;
};

export type PersonCreateInput = {
  name: Scalars["String"];
  born?: InputMaybe<Scalars["Int"]>;
  actedInMovies?: InputMaybe<PersonActedInMoviesFieldInput>;
  directedMovies?: InputMaybe<PersonDirectedMoviesFieldInput>;
};

export type PersonDeleteInput = {
  actedInMovies?: InputMaybe<Array<PersonActedInMoviesDeleteFieldInput>>;
  directedMovies?: InputMaybe<Array<PersonDirectedMoviesDeleteFieldInput>>;
};

export type PersonDirectedMoviesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<PersonDirectedMoviesAggregateInput>>;
  OR?: InputMaybe<Array<PersonDirectedMoviesAggregateInput>>;
  node?: InputMaybe<PersonDirectedMoviesNodeAggregationWhereInput>;
};

export type PersonDirectedMoviesConnectFieldInput = {
  where?: InputMaybe<MovieConnectWhere>;
  connect?: InputMaybe<Array<MovieConnectInput>>;
};

export type PersonDirectedMoviesConnectionSort = {
  node?: InputMaybe<MovieSort>;
};

export type PersonDirectedMoviesConnectionWhere = {
  AND?: InputMaybe<Array<PersonDirectedMoviesConnectionWhere>>;
  OR?: InputMaybe<Array<PersonDirectedMoviesConnectionWhere>>;
  node?: InputMaybe<MovieWhere>;
  node_NOT?: InputMaybe<MovieWhere>;
};

export type PersonDirectedMoviesCreateFieldInput = {
  node: MovieCreateInput;
};

export type PersonDirectedMoviesDeleteFieldInput = {
  where?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  delete?: InputMaybe<MovieDeleteInput>;
};

export type PersonDirectedMoviesDisconnectFieldInput = {
  where?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  disconnect?: InputMaybe<MovieDisconnectInput>;
};

export type PersonDirectedMoviesFieldInput = {
  create?: InputMaybe<Array<PersonDirectedMoviesCreateFieldInput>>;
  connect?: InputMaybe<Array<PersonDirectedMoviesConnectFieldInput>>;
};

export type PersonDirectedMoviesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonDirectedMoviesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonDirectedMoviesNodeAggregationWhereInput>>;
  title_EQUAL?: InputMaybe<Scalars["String"]>;
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_GT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  title_GTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_LT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  title_LTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  released_EQUAL?: InputMaybe<Scalars["Int"]>;
  released_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  released_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  released_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  released_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  released_GT?: InputMaybe<Scalars["Int"]>;
  released_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  released_MIN_GT?: InputMaybe<Scalars["Int"]>;
  released_MAX_GT?: InputMaybe<Scalars["Int"]>;
  released_SUM_GT?: InputMaybe<Scalars["Int"]>;
  released_GTE?: InputMaybe<Scalars["Int"]>;
  released_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  released_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  released_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  released_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  released_LT?: InputMaybe<Scalars["Int"]>;
  released_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  released_MIN_LT?: InputMaybe<Scalars["Int"]>;
  released_MAX_LT?: InputMaybe<Scalars["Int"]>;
  released_SUM_LT?: InputMaybe<Scalars["Int"]>;
  released_LTE?: InputMaybe<Scalars["Int"]>;
  released_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  released_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  released_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  released_SUM_LTE?: InputMaybe<Scalars["Int"]>;
};

export type PersonDirectedMoviesUpdateConnectionInput = {
  node?: InputMaybe<MovieUpdateInput>;
};

export type PersonDirectedMoviesUpdateFieldInput = {
  where?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  update?: InputMaybe<PersonDirectedMoviesUpdateConnectionInput>;
  connect?: InputMaybe<Array<PersonDirectedMoviesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PersonDirectedMoviesDisconnectFieldInput>>;
  create?: InputMaybe<Array<PersonDirectedMoviesCreateFieldInput>>;
  delete?: InputMaybe<Array<PersonDirectedMoviesDeleteFieldInput>>;
};

export type PersonDisconnectInput = {
  actedInMovies?: InputMaybe<Array<PersonActedInMoviesDisconnectFieldInput>>;
  directedMovies?: InputMaybe<Array<PersonDirectedMoviesDisconnectFieldInput>>;
};

export type PersonOptions = {
  /** Specify one or more PersonSort objects to sort People by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PersonSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type PersonRelationInput = {
  actedInMovies?: InputMaybe<Array<PersonActedInMoviesCreateFieldInput>>;
  directedMovies?: InputMaybe<Array<PersonDirectedMoviesCreateFieldInput>>;
};

/** Fields to sort People by. The order in which sorts are applied is not guaranteed when specifying many fields in one PersonSort object. */
export type PersonSort = {
  name?: InputMaybe<SortDirection>;
  born?: InputMaybe<SortDirection>;
};

export type PersonUpdateInput = {
  name?: InputMaybe<Scalars["String"]>;
  born?: InputMaybe<Scalars["Int"]>;
  born_INCREMENT?: InputMaybe<Scalars["Int"]>;
  born_DECREMENT?: InputMaybe<Scalars["Int"]>;
  actedInMovies?: InputMaybe<Array<PersonActedInMoviesUpdateFieldInput>>;
  directedMovies?: InputMaybe<Array<PersonDirectedMoviesUpdateFieldInput>>;
};

export type PersonWhere = {
  OR?: InputMaybe<Array<PersonWhere>>;
  AND?: InputMaybe<Array<PersonWhere>>;
  name?: InputMaybe<Scalars["String"]>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  born?: InputMaybe<Scalars["Int"]>;
  born_NOT?: InputMaybe<Scalars["Int"]>;
  born_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  born_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  born_LT?: InputMaybe<Scalars["Int"]>;
  born_LTE?: InputMaybe<Scalars["Int"]>;
  born_GT?: InputMaybe<Scalars["Int"]>;
  born_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Use `actedInMovies_SOME` instead. */
  actedInMovies?: InputMaybe<MovieWhere>;
  /** @deprecated Use `actedInMovies_NONE` instead. */
  actedInMovies_NOT?: InputMaybe<MovieWhere>;
  actedInMoviesAggregate?: InputMaybe<PersonActedInMoviesAggregateInput>;
  /** Return People where all of the related Movies match this filter */
  actedInMovies_ALL?: InputMaybe<MovieWhere>;
  /** Return People where none of the related Movies match this filter */
  actedInMovies_NONE?: InputMaybe<MovieWhere>;
  /** Return People where one of the related Movies match this filter */
  actedInMovies_SINGLE?: InputMaybe<MovieWhere>;
  /** Return People where some of the related Movies match this filter */
  actedInMovies_SOME?: InputMaybe<MovieWhere>;
  /** @deprecated Use `directedMovies_SOME` instead. */
  directedMovies?: InputMaybe<MovieWhere>;
  /** @deprecated Use `directedMovies_NONE` instead. */
  directedMovies_NOT?: InputMaybe<MovieWhere>;
  directedMoviesAggregate?: InputMaybe<PersonDirectedMoviesAggregateInput>;
  /** Return People where all of the related Movies match this filter */
  directedMovies_ALL?: InputMaybe<MovieWhere>;
  /** Return People where none of the related Movies match this filter */
  directedMovies_NONE?: InputMaybe<MovieWhere>;
  /** Return People where one of the related Movies match this filter */
  directedMovies_SINGLE?: InputMaybe<MovieWhere>;
  /** Return People where some of the related Movies match this filter */
  directedMovies_SOME?: InputMaybe<MovieWhere>;
  /** @deprecated Use `actedInMoviesConnection_SOME` instead. */
  actedInMoviesConnection?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  /** @deprecated Use `actedInMoviesConnection_NONE` instead. */
  actedInMoviesConnection_NOT?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  actedInMoviesConnection_ALL?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  actedInMoviesConnection_NONE?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  actedInMoviesConnection_SINGLE?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  actedInMoviesConnection_SOME?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  /** @deprecated Use `directedMoviesConnection_SOME` instead. */
  directedMoviesConnection?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  /** @deprecated Use `directedMoviesConnection_NONE` instead. */
  directedMoviesConnection_NOT?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  directedMoviesConnection_ALL?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  directedMoviesConnection_NONE?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  directedMoviesConnection_SINGLE?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  directedMoviesConnection_SOME?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
};

export type RatedCreateInput = {
  rating: Scalars["Int"];
};

export type RatedSort = {
  rating?: InputMaybe<SortDirection>;
};

export type RatedUpdateInput = {
  rating?: InputMaybe<Scalars["Int"]>;
  rating_INCREMENT?: InputMaybe<Scalars["Int"]>;
  rating_DECREMENT?: InputMaybe<Scalars["Int"]>;
};

export type RatedWhere = {
  OR?: InputMaybe<Array<RatedWhere>>;
  AND?: InputMaybe<Array<RatedWhere>>;
  rating?: InputMaybe<Scalars["Int"]>;
  rating_NOT?: InputMaybe<Scalars["Int"]>;
  rating_IN?: InputMaybe<Array<Scalars["Int"]>>;
  rating_NOT_IN?: InputMaybe<Array<Scalars["Int"]>>;
  rating_LT?: InputMaybe<Scalars["Int"]>;
  rating_LTE?: InputMaybe<Scalars["Int"]>;
  rating_GT?: InputMaybe<Scalars["Int"]>;
  rating_GTE?: InputMaybe<Scalars["Int"]>;
};

export type UserConnectInput = {
  ratedMovies?: InputMaybe<Array<UserRatedMoviesConnectFieldInput>>;
};

export type UserCreateInput = {
  email: Scalars["String"];
  passwordHash: Scalars["String"];
  passwordSalt: Scalars["String"];
  ratedMovies?: InputMaybe<UserRatedMoviesFieldInput>;
};

export type UserDeleteInput = {
  ratedMovies?: InputMaybe<Array<UserRatedMoviesDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  ratedMovies?: InputMaybe<Array<UserRatedMoviesDisconnectFieldInput>>;
};

export type UserOptions = {
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type UserRatedMoviesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<UserRatedMoviesAggregateInput>>;
  OR?: InputMaybe<Array<UserRatedMoviesAggregateInput>>;
  node?: InputMaybe<UserRatedMoviesNodeAggregationWhereInput>;
  edge?: InputMaybe<UserRatedMoviesEdgeAggregationWhereInput>;
};

export type UserRatedMoviesConnectFieldInput = {
  where?: InputMaybe<MovieConnectWhere>;
  connect?: InputMaybe<Array<MovieConnectInput>>;
  edge: RatedCreateInput;
};

export type UserRatedMoviesConnectionSort = {
  edge?: InputMaybe<RatedSort>;
  node?: InputMaybe<MovieSort>;
};

export type UserRatedMoviesConnectionWhere = {
  AND?: InputMaybe<Array<UserRatedMoviesConnectionWhere>>;
  OR?: InputMaybe<Array<UserRatedMoviesConnectionWhere>>;
  edge?: InputMaybe<RatedWhere>;
  edge_NOT?: InputMaybe<RatedWhere>;
  node?: InputMaybe<MovieWhere>;
  node_NOT?: InputMaybe<MovieWhere>;
};

export type UserRatedMoviesCreateFieldInput = {
  node: MovieCreateInput;
  edge: RatedCreateInput;
};

export type UserRatedMoviesDeleteFieldInput = {
  where?: InputMaybe<UserRatedMoviesConnectionWhere>;
  delete?: InputMaybe<MovieDeleteInput>;
};

export type UserRatedMoviesDisconnectFieldInput = {
  where?: InputMaybe<UserRatedMoviesConnectionWhere>;
  disconnect?: InputMaybe<MovieDisconnectInput>;
};

export type UserRatedMoviesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserRatedMoviesEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserRatedMoviesEdgeAggregationWhereInput>>;
  rating_EQUAL?: InputMaybe<Scalars["Int"]>;
  rating_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  rating_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  rating_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  rating_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  rating_GT?: InputMaybe<Scalars["Int"]>;
  rating_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  rating_MIN_GT?: InputMaybe<Scalars["Int"]>;
  rating_MAX_GT?: InputMaybe<Scalars["Int"]>;
  rating_SUM_GT?: InputMaybe<Scalars["Int"]>;
  rating_GTE?: InputMaybe<Scalars["Int"]>;
  rating_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  rating_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  rating_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  rating_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  rating_LT?: InputMaybe<Scalars["Int"]>;
  rating_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  rating_MIN_LT?: InputMaybe<Scalars["Int"]>;
  rating_MAX_LT?: InputMaybe<Scalars["Int"]>;
  rating_SUM_LT?: InputMaybe<Scalars["Int"]>;
  rating_LTE?: InputMaybe<Scalars["Int"]>;
  rating_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  rating_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  rating_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  rating_SUM_LTE?: InputMaybe<Scalars["Int"]>;
};

export type UserRatedMoviesFieldInput = {
  create?: InputMaybe<Array<UserRatedMoviesCreateFieldInput>>;
  connect?: InputMaybe<Array<UserRatedMoviesConnectFieldInput>>;
};

export type UserRatedMoviesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserRatedMoviesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserRatedMoviesNodeAggregationWhereInput>>;
  title_EQUAL?: InputMaybe<Scalars["String"]>;
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_GT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  title_GTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_LT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  title_LTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  released_EQUAL?: InputMaybe<Scalars["Int"]>;
  released_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  released_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  released_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  released_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  released_GT?: InputMaybe<Scalars["Int"]>;
  released_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  released_MIN_GT?: InputMaybe<Scalars["Int"]>;
  released_MAX_GT?: InputMaybe<Scalars["Int"]>;
  released_SUM_GT?: InputMaybe<Scalars["Int"]>;
  released_GTE?: InputMaybe<Scalars["Int"]>;
  released_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  released_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  released_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  released_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  released_LT?: InputMaybe<Scalars["Int"]>;
  released_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  released_MIN_LT?: InputMaybe<Scalars["Int"]>;
  released_MAX_LT?: InputMaybe<Scalars["Int"]>;
  released_SUM_LT?: InputMaybe<Scalars["Int"]>;
  released_LTE?: InputMaybe<Scalars["Int"]>;
  released_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  released_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  released_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  released_SUM_LTE?: InputMaybe<Scalars["Int"]>;
};

export type UserRatedMoviesUpdateConnectionInput = {
  node?: InputMaybe<MovieUpdateInput>;
  edge?: InputMaybe<RatedUpdateInput>;
};

export type UserRatedMoviesUpdateFieldInput = {
  where?: InputMaybe<UserRatedMoviesConnectionWhere>;
  update?: InputMaybe<UserRatedMoviesUpdateConnectionInput>;
  connect?: InputMaybe<Array<UserRatedMoviesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserRatedMoviesDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserRatedMoviesCreateFieldInput>>;
  delete?: InputMaybe<Array<UserRatedMoviesDeleteFieldInput>>;
};

export type UserRelationInput = {
  ratedMovies?: InputMaybe<Array<UserRatedMoviesCreateFieldInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  id?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  passwordHash?: InputMaybe<SortDirection>;
  passwordSalt?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars["String"]>;
  passwordHash?: InputMaybe<Scalars["String"]>;
  passwordSalt?: InputMaybe<Scalars["String"]>;
  ratedMovies?: InputMaybe<Array<UserRatedMoviesUpdateFieldInput>>;
};

export type UserWhere = {
  OR?: InputMaybe<Array<UserWhere>>;
  AND?: InputMaybe<Array<UserWhere>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  email?: InputMaybe<Scalars["String"]>;
  email_NOT?: InputMaybe<Scalars["String"]>;
  email_IN?: InputMaybe<Array<Scalars["String"]>>;
  email_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  email_CONTAINS?: InputMaybe<Scalars["String"]>;
  email_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  email_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  email_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  email_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  email_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  passwordHash?: InputMaybe<Scalars["String"]>;
  passwordHash_NOT?: InputMaybe<Scalars["String"]>;
  passwordHash_IN?: InputMaybe<Array<Scalars["String"]>>;
  passwordHash_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  passwordHash_CONTAINS?: InputMaybe<Scalars["String"]>;
  passwordHash_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  passwordHash_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  passwordHash_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  passwordHash_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  passwordHash_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  passwordSalt?: InputMaybe<Scalars["String"]>;
  passwordSalt_NOT?: InputMaybe<Scalars["String"]>;
  passwordSalt_IN?: InputMaybe<Array<Scalars["String"]>>;
  passwordSalt_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  passwordSalt_CONTAINS?: InputMaybe<Scalars["String"]>;
  passwordSalt_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  passwordSalt_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  passwordSalt_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  passwordSalt_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  passwordSalt_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Use `ratedMovies_SOME` instead. */
  ratedMovies?: InputMaybe<MovieWhere>;
  /** @deprecated Use `ratedMovies_NONE` instead. */
  ratedMovies_NOT?: InputMaybe<MovieWhere>;
  ratedMoviesAggregate?: InputMaybe<UserRatedMoviesAggregateInput>;
  /** Return Users where all of the related Movies match this filter */
  ratedMovies_ALL?: InputMaybe<MovieWhere>;
  /** Return Users where none of the related Movies match this filter */
  ratedMovies_NONE?: InputMaybe<MovieWhere>;
  /** Return Users where one of the related Movies match this filter */
  ratedMovies_SINGLE?: InputMaybe<MovieWhere>;
  /** Return Users where some of the related Movies match this filter */
  ratedMovies_SOME?: InputMaybe<MovieWhere>;
  /** @deprecated Use `ratedMoviesConnection_SOME` instead. */
  ratedMoviesConnection?: InputMaybe<UserRatedMoviesConnectionWhere>;
  /** @deprecated Use `ratedMoviesConnection_NONE` instead. */
  ratedMoviesConnection_NOT?: InputMaybe<UserRatedMoviesConnectionWhere>;
  ratedMoviesConnection_ALL?: InputMaybe<UserRatedMoviesConnectionWhere>;
  ratedMoviesConnection_NONE?: InputMaybe<UserRatedMoviesConnectionWhere>;
  ratedMoviesConnection_SINGLE?: InputMaybe<UserRatedMoviesConnectionWhere>;
  ratedMoviesConnection_SOME?: InputMaybe<UserRatedMoviesConnectionWhere>;
};

export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IntAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface MovieAggregateSelectionInput {
  count?: boolean;
  title?: StringAggregateInputNonNullable;
  released?: IntAggregateInputNonNullable;
}

export declare class MovieModel {
  public find(args?: {
    where?: MovieWhere;

    options?: MovieOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Movie[]>;
  public create(args: {
    input: MovieCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateMoviesMutationResponse>;
  public update(args: {
    where?: MovieWhere;
    update?: MovieUpdateInput;
    connect?: MovieConnectInput;
    disconnect?: MovieDisconnectInput;
    create?: MovieCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateMoviesMutationResponse>;
  public delete(args: {
    where?: MovieWhere;
    delete?: MovieDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: MovieWhere;

    aggregate: MovieAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<MovieAggregateSelection>;
}

export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IntAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface PersonAggregateSelectionInput {
  count?: boolean;
  name?: StringAggregateInputNonNullable;
  born?: IntAggregateInputNullable;
}

export declare class PersonModel {
  public find(args?: {
    where?: PersonWhere;

    options?: PersonOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Person[]>;
  public create(args: {
    input: PersonCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreatePeopleMutationResponse>;
  public update(args: {
    where?: PersonWhere;
    update?: PersonUpdateInput;
    connect?: PersonConnectInput;
    disconnect?: PersonDisconnectInput;
    create?: PersonCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdatePeopleMutationResponse>;
  public delete(args: {
    where?: PersonWhere;
    delete?: PersonDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: PersonWhere;

    aggregate: PersonAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<PersonAggregateSelection>;
}

export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IntAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface UserAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  email?: StringAggregateInputNonNullable;
  passwordHash?: StringAggregateInputNonNullable;
  passwordSalt?: StringAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class UserModel {
  public find(args?: {
    where?: UserWhere;

    options?: UserOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<User[]>;
  public create(args: {
    input: UserCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateUsersMutationResponse>;
  public update(args: {
    where?: UserWhere;
    update?: UserUpdateInput;
    connect?: UserConnectInput;
    disconnect?: UserDisconnectInput;
    create?: UserCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateUsersMutationResponse>;
  public delete(args: {
    where?: UserWhere;
    delete?: UserDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: UserWhere;

    aggregate: UserAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<UserAggregateSelection>;
}

export interface ModelMap {
  Movie: MovieModel;
  Person: PersonModel;
  User: UserModel;
}
