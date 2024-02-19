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
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: { input: string; output: string };
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string };
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean };
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number };
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number };
  /** A date and time, represented as an ISO-8601 string */
  DateTime: { input: any; output: any };
};

export type Query = {
  __typename?: "Query";
  movies: Array<Movie>;
  moviesConnection: MoviesConnection;
  moviesAggregate: MovieAggregateSelection;
  people: Array<Person>;
  peopleConnection: PeopleConnection;
  peopleAggregate: PersonAggregateSelection;
  users: Array<User>;
  usersConnection: UsersConnection;
  usersAggregate: UserAggregateSelection;
};

export type QueryMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  options?: InputMaybe<MovieOptions>;
};

export type QueryMoviesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<MovieWhere>;
  sort?: InputMaybe<Array<InputMaybe<MovieSort>>>;
};

export type QueryMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
};

export type QueryPeopleArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
};

export type QueryPeopleConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<PersonWhere>;
  sort?: InputMaybe<Array<InputMaybe<PersonSort>>>;
};

export type QueryPeopleAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
};

export type QueryUsersArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
};

export type QueryUsersConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<UserWhere>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  signUp: Scalars["String"]["output"];
  signIn: Scalars["String"]["output"];
  rateMovie: Scalars["ID"]["output"];
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
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationSignInArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationRateMovieArgs = {
  movieTitle: Scalars["String"]["input"];
  rating: Scalars["Int"]["input"];
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

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type ActedIn = {
  roles?: Maybe<Array<Scalars["String"]["output"]>>;
};

export type Rated = {
  rating: Scalars["Int"]["output"];
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: "CreateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
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
  min?: Maybe<Scalars["DateTime"]["output"]>;
  max?: Maybe<Scalars["DateTime"]["output"]>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: "DeleteInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: "IDAggregateSelectionNonNullable";
  shortest: Scalars["ID"]["output"];
  longest: Scalars["ID"]["output"];
};

export type IntAggregateSelectionNonNullable = {
  __typename?: "IntAggregateSelectionNonNullable";
  max: Scalars["Int"]["output"];
  min: Scalars["Int"]["output"];
  average: Scalars["Float"]["output"];
  sum: Scalars["Int"]["output"];
};

export type IntAggregateSelectionNullable = {
  __typename?: "IntAggregateSelectionNullable";
  max?: Maybe<Scalars["Int"]["output"]>;
  min?: Maybe<Scalars["Int"]["output"]>;
  average?: Maybe<Scalars["Float"]["output"]>;
  sum?: Maybe<Scalars["Int"]["output"]>;
};

export type Movie = {
  __typename?: "Movie";
  title: Scalars["String"]["output"];
  released: Scalars["Int"]["output"];
  actorsAggregate?: Maybe<MoviePersonActorsAggregationSelection>;
  actors: Array<Person>;
  directorAggregate?: Maybe<MoviePersonDirectorAggregationSelection>;
  director: Person;
  actorsConnection: MovieActorsConnection;
  directorConnection: MovieDirectorConnection;
};

export type MovieActorsAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MovieActorsArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MovieDirectorAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MovieDirectorArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MovieActorsConnectionArgs = {
  where?: InputMaybe<MovieActorsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<MovieActorsConnectionSort>>;
};

export type MovieDirectorConnectionArgs = {
  where?: InputMaybe<MovieDirectorConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<MovieDirectorConnectionSort>>;
};

export type MovieActorsConnection = {
  __typename?: "MovieActorsConnection";
  edges: Array<MovieActorsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type MovieActorsRelationship = ActedIn & {
  __typename?: "MovieActorsRelationship";
  cursor: Scalars["String"]["output"];
  node: Person;
  roles?: Maybe<Array<Scalars["String"]["output"]>>;
};

export type MovieAggregateSelection = {
  __typename?: "MovieAggregateSelection";
  count: Scalars["Int"]["output"];
  title: StringAggregateSelectionNonNullable;
  released: IntAggregateSelectionNonNullable;
};

export type MovieDirectorConnection = {
  __typename?: "MovieDirectorConnection";
  edges: Array<MovieDirectorRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type MovieDirectorRelationship = {
  __typename?: "MovieDirectorRelationship";
  cursor: Scalars["String"]["output"];
  node: Person;
};

export type MovieEdge = {
  __typename?: "MovieEdge";
  cursor: Scalars["String"]["output"];
  node: Movie;
};

export type MoviePersonActorsAggregationSelection = {
  __typename?: "MoviePersonActorsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<MoviePersonActorsNodeAggregateSelection>;
};

export type MoviePersonActorsNodeAggregateSelection = {
  __typename?: "MoviePersonActorsNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  born: IntAggregateSelectionNullable;
};

export type MoviePersonDirectorAggregationSelection = {
  __typename?: "MoviePersonDirectorAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<MoviePersonDirectorNodeAggregateSelection>;
};

export type MoviePersonDirectorNodeAggregateSelection = {
  __typename?: "MoviePersonDirectorNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  born: IntAggregateSelectionNullable;
};

export type MoviesConnection = {
  __typename?: "MoviesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<MovieEdge>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
  endCursor?: Maybe<Scalars["String"]["output"]>;
};

export type PeopleConnection = {
  __typename?: "PeopleConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<PersonEdge>;
};

export type Person = {
  __typename?: "Person";
  name: Scalars["String"]["output"];
  born?: Maybe<Scalars["Int"]["output"]>;
  age?: Maybe<Scalars["Int"]["output"]>;
  actedInMoviesAggregate?: Maybe<PersonMovieActedInMoviesAggregationSelection>;
  actedInMovies: Array<Movie>;
  directedMoviesAggregate?: Maybe<PersonMovieDirectedMoviesAggregationSelection>;
  directedMovies: Array<Movie>;
  actedInMoviesConnection: PersonActedInMoviesConnection;
  directedMoviesConnection: PersonDirectedMoviesConnection;
};

export type PersonActedInMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonActedInMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  options?: InputMaybe<MovieOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonDirectedMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonDirectedMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  options?: InputMaybe<MovieOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonActedInMoviesConnectionArgs = {
  where?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PersonActedInMoviesConnectionSort>>;
};

export type PersonDirectedMoviesConnectionArgs = {
  where?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PersonDirectedMoviesConnectionSort>>;
};

export type PersonActedInMoviesConnection = {
  __typename?: "PersonActedInMoviesConnection";
  edges: Array<PersonActedInMoviesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PersonActedInMoviesRelationship = ActedIn & {
  __typename?: "PersonActedInMoviesRelationship";
  cursor: Scalars["String"]["output"];
  node: Movie;
  roles?: Maybe<Array<Scalars["String"]["output"]>>;
};

export type PersonAggregateSelection = {
  __typename?: "PersonAggregateSelection";
  count: Scalars["Int"]["output"];
  name: StringAggregateSelectionNonNullable;
  born: IntAggregateSelectionNullable;
};

export type PersonDirectedMoviesConnection = {
  __typename?: "PersonDirectedMoviesConnection";
  edges: Array<PersonDirectedMoviesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PersonDirectedMoviesRelationship = {
  __typename?: "PersonDirectedMoviesRelationship";
  cursor: Scalars["String"]["output"];
  node: Movie;
};

export type PersonEdge = {
  __typename?: "PersonEdge";
  cursor: Scalars["String"]["output"];
  node: Person;
};

export type PersonMovieActedInMoviesAggregationSelection = {
  __typename?: "PersonMovieActedInMoviesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PersonMovieActedInMoviesNodeAggregateSelection>;
};

export type PersonMovieActedInMoviesNodeAggregateSelection = {
  __typename?: "PersonMovieActedInMoviesNodeAggregateSelection";
  title: StringAggregateSelectionNonNullable;
  released: IntAggregateSelectionNonNullable;
};

export type PersonMovieDirectedMoviesAggregationSelection = {
  __typename?: "PersonMovieDirectedMoviesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PersonMovieDirectedMoviesNodeAggregateSelection>;
};

export type PersonMovieDirectedMoviesNodeAggregateSelection = {
  __typename?: "PersonMovieDirectedMoviesNodeAggregateSelection";
  title: StringAggregateSelectionNonNullable;
  released: IntAggregateSelectionNonNullable;
};

export type StringAggregateSelectionNonNullable = {
  __typename?: "StringAggregateSelectionNonNullable";
  shortest: Scalars["String"]["output"];
  longest: Scalars["String"]["output"];
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: "UpdateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
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
  id: Scalars["ID"]["output"];
  email: Scalars["String"]["output"];
  passwordHash: Scalars["String"]["output"];
  passwordSalt: Scalars["String"]["output"];
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  ratedMoviesAggregate?: Maybe<UserMovieRatedMoviesAggregationSelection>;
  ratedMovies: Array<Movie>;
  ratedMoviesConnection: UserRatedMoviesConnection;
};

export type UserRatedMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserRatedMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  options?: InputMaybe<MovieOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserRatedMoviesConnectionArgs = {
  where?: InputMaybe<UserRatedMoviesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserRatedMoviesConnectionSort>>;
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  passwordHash: StringAggregateSelectionNonNullable;
  passwordSalt: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type UserMovieRatedMoviesAggregationSelection = {
  __typename?: "UserMovieRatedMoviesAggregationSelection";
  count: Scalars["Int"]["output"];
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
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserRatedMoviesRelationship = Rated & {
  __typename?: "UserRatedMoviesRelationship";
  cursor: Scalars["String"]["output"];
  node: Movie;
  rating: Scalars["Int"]["output"];
};

export type UsersConnection = {
  __typename?: "UsersConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
};

export type ActedInCreateInput = {
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type ActedInSort = {
  roles?: InputMaybe<SortDirection>;
};

export type ActedInUpdateInput = {
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  roles_POP?: InputMaybe<Scalars["Int"]["input"]>;
  roles_PUSH?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type ActedInWhere = {
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  roles_NOT?: InputMaybe<Array<Scalars["String"]["input"]>>;
  roles_INCLUDES?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  roles_NOT_INCLUDES?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<ActedInWhere>>;
  AND?: InputMaybe<Array<ActedInWhere>>;
  NOT?: InputMaybe<ActedInWhere>;
};

export type MovieActorsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<MovieActorsAggregateInput>>;
  OR?: InputMaybe<Array<MovieActorsAggregateInput>>;
  NOT?: InputMaybe<MovieActorsAggregateInput>;
  node?: InputMaybe<MovieActorsNodeAggregationWhereInput>;
};

export type MovieActorsConnectFieldInput = {
  edge?: InputMaybe<ActedInCreateInput>;
  where?: InputMaybe<PersonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<PersonConnectInput>>;
};

export type MovieActorsConnectionSort = {
  node?: InputMaybe<PersonSort>;
  edge?: InputMaybe<ActedInSort>;
};

export type MovieActorsConnectionWhere = {
  OR?: InputMaybe<Array<MovieActorsConnectionWhere>>;
  AND?: InputMaybe<Array<MovieActorsConnectionWhere>>;
  NOT?: InputMaybe<MovieActorsConnectionWhere>;
  node?: InputMaybe<PersonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PersonWhere>;
  edge?: InputMaybe<ActedInWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ActedInWhere>;
};

export type MovieActorsCreateFieldInput = {
  edge?: InputMaybe<ActedInCreateInput>;
  node: PersonCreateInput;
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
  connect?: InputMaybe<Array<MovieActorsConnectFieldInput>>;
  create?: InputMaybe<Array<MovieActorsCreateFieldInput>>;
};

export type MovieActorsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MovieActorsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MovieActorsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MovieActorsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  born_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  born_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  born_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  born_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_GT?: InputMaybe<Scalars["Int"]["input"]>;
  born_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  born_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  born_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  born_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  born_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  born_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  born_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  born_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_LT?: InputMaybe<Scalars["Int"]["input"]>;
  born_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  born_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  born_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  born_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  born_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  born_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  born_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  born_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MovieActorsUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
  edge?: InputMaybe<ActedInUpdateInput>;
};

export type MovieActorsUpdateFieldInput = {
  where?: InputMaybe<MovieActorsConnectionWhere>;
  connect?: InputMaybe<Array<MovieActorsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<MovieActorsDisconnectFieldInput>>;
  create?: InputMaybe<Array<MovieActorsCreateFieldInput>>;
  update?: InputMaybe<MovieActorsUpdateConnectionInput>;
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
  title: Scalars["String"]["input"];
  released: Scalars["Int"]["input"];
  actors?: InputMaybe<MovieActorsFieldInput>;
  director?: InputMaybe<MovieDirectorFieldInput>;
};

export type MovieDeleteInput = {
  actors?: InputMaybe<Array<MovieActorsDeleteFieldInput>>;
  director?: InputMaybe<MovieDirectorDeleteFieldInput>;
};

export type MovieDirectorAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<MovieDirectorAggregateInput>>;
  OR?: InputMaybe<Array<MovieDirectorAggregateInput>>;
  NOT?: InputMaybe<MovieDirectorAggregateInput>;
  node?: InputMaybe<MovieDirectorNodeAggregationWhereInput>;
};

export type MovieDirectorConnectFieldInput = {
  where?: InputMaybe<PersonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<PersonConnectInput>;
};

export type MovieDirectorConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type MovieDirectorConnectionWhere = {
  OR?: InputMaybe<Array<MovieDirectorConnectionWhere>>;
  AND?: InputMaybe<Array<MovieDirectorConnectionWhere>>;
  NOT?: InputMaybe<MovieDirectorConnectionWhere>;
  node?: InputMaybe<PersonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
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
  connect?: InputMaybe<MovieDirectorConnectFieldInput>;
  create?: InputMaybe<MovieDirectorCreateFieldInput>;
};

export type MovieDirectorNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MovieDirectorNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MovieDirectorNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MovieDirectorNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  born_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  born_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  born_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  born_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_GT?: InputMaybe<Scalars["Int"]["input"]>;
  born_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  born_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  born_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  born_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  born_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  born_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  born_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  born_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_LT?: InputMaybe<Scalars["Int"]["input"]>;
  born_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  born_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  born_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  born_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  born_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  born_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  born_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  born_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MovieDirectorUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type MovieDirectorUpdateFieldInput = {
  where?: InputMaybe<MovieDirectorConnectionWhere>;
  connect?: InputMaybe<MovieDirectorConnectFieldInput>;
  disconnect?: InputMaybe<MovieDirectorDisconnectFieldInput>;
  create?: InputMaybe<MovieDirectorCreateFieldInput>;
  update?: InputMaybe<MovieDirectorUpdateConnectionInput>;
  delete?: InputMaybe<MovieDirectorDeleteFieldInput>;
};

export type MovieDisconnectInput = {
  actors?: InputMaybe<Array<MovieActorsDisconnectFieldInput>>;
  director?: InputMaybe<MovieDirectorDisconnectFieldInput>;
};

export type MovieOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more MovieSort objects to sort Movies by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MovieSort>>;
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
  title?: InputMaybe<Scalars["String"]["input"]>;
  released?: InputMaybe<Scalars["Int"]["input"]>;
  released_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  released_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  actors?: InputMaybe<Array<MovieActorsUpdateFieldInput>>;
  director?: InputMaybe<MovieDirectorUpdateFieldInput>;
};

export type MovieWhere = {
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT?: InputMaybe<Scalars["String"]["input"]>;
  title_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  title_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  title_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  title_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  released?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  released_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  released_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  released_NOT_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  released_LT?: InputMaybe<Scalars["Int"]["input"]>;
  released_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_GT?: InputMaybe<Scalars["Int"]["input"]>;
  released_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  OR?: InputMaybe<Array<MovieWhere>>;
  AND?: InputMaybe<Array<MovieWhere>>;
  NOT?: InputMaybe<MovieWhere>;
  /** @deprecated Use `actors_SOME` instead. */
  actors?: InputMaybe<PersonWhere>;
  /** @deprecated Use `actors_NONE` instead. */
  actors_NOT?: InputMaybe<PersonWhere>;
  /** Return Movies where all of the related People match this filter */
  actors_ALL?: InputMaybe<PersonWhere>;
  /** Return Movies where none of the related People match this filter */
  actors_NONE?: InputMaybe<PersonWhere>;
  /** Return Movies where one of the related People match this filter */
  actors_SINGLE?: InputMaybe<PersonWhere>;
  /** Return Movies where some of the related People match this filter */
  actors_SOME?: InputMaybe<PersonWhere>;
  actorsAggregate?: InputMaybe<MovieActorsAggregateInput>;
  director?: InputMaybe<PersonWhere>;
  director_NOT?: InputMaybe<PersonWhere>;
  directorAggregate?: InputMaybe<MovieDirectorAggregateInput>;
  /** @deprecated Use `actorsConnection_SOME` instead. */
  actorsConnection?: InputMaybe<MovieActorsConnectionWhere>;
  /** @deprecated Use `actorsConnection_NONE` instead. */
  actorsConnection_NOT?: InputMaybe<MovieActorsConnectionWhere>;
  /** Return Movies where all of the related MovieActorsConnections match this filter */
  actorsConnection_ALL?: InputMaybe<MovieActorsConnectionWhere>;
  /** Return Movies where none of the related MovieActorsConnections match this filter */
  actorsConnection_NONE?: InputMaybe<MovieActorsConnectionWhere>;
  /** Return Movies where one of the related MovieActorsConnections match this filter */
  actorsConnection_SINGLE?: InputMaybe<MovieActorsConnectionWhere>;
  /** Return Movies where some of the related MovieActorsConnections match this filter */
  actorsConnection_SOME?: InputMaybe<MovieActorsConnectionWhere>;
  directorConnection?: InputMaybe<MovieDirectorConnectionWhere>;
  directorConnection_NOT?: InputMaybe<MovieDirectorConnectionWhere>;
};

export type PersonActedInMoviesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PersonActedInMoviesAggregateInput>>;
  OR?: InputMaybe<Array<PersonActedInMoviesAggregateInput>>;
  NOT?: InputMaybe<PersonActedInMoviesAggregateInput>;
  node?: InputMaybe<PersonActedInMoviesNodeAggregationWhereInput>;
};

export type PersonActedInMoviesConnectFieldInput = {
  edge?: InputMaybe<ActedInCreateInput>;
  where?: InputMaybe<MovieConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<MovieConnectInput>>;
};

export type PersonActedInMoviesConnectionSort = {
  node?: InputMaybe<MovieSort>;
  edge?: InputMaybe<ActedInSort>;
};

export type PersonActedInMoviesConnectionWhere = {
  OR?: InputMaybe<Array<PersonActedInMoviesConnectionWhere>>;
  AND?: InputMaybe<Array<PersonActedInMoviesConnectionWhere>>;
  NOT?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  node?: InputMaybe<MovieWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<MovieWhere>;
  edge?: InputMaybe<ActedInWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ActedInWhere>;
};

export type PersonActedInMoviesCreateFieldInput = {
  edge?: InputMaybe<ActedInCreateInput>;
  node: MovieCreateInput;
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
  connect?: InputMaybe<Array<PersonActedInMoviesConnectFieldInput>>;
  create?: InputMaybe<Array<PersonActedInMoviesCreateFieldInput>>;
};

export type PersonActedInMoviesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonActedInMoviesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonActedInMoviesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonActedInMoviesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  released_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  released_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  released_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  released_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_GT?: InputMaybe<Scalars["Int"]["input"]>;
  released_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  released_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  released_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  released_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_LT?: InputMaybe<Scalars["Int"]["input"]>;
  released_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  released_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  released_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  released_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type PersonActedInMoviesUpdateConnectionInput = {
  node?: InputMaybe<MovieUpdateInput>;
  edge?: InputMaybe<ActedInUpdateInput>;
};

export type PersonActedInMoviesUpdateFieldInput = {
  where?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  connect?: InputMaybe<Array<PersonActedInMoviesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PersonActedInMoviesDisconnectFieldInput>>;
  create?: InputMaybe<Array<PersonActedInMoviesCreateFieldInput>>;
  update?: InputMaybe<PersonActedInMoviesUpdateConnectionInput>;
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
  name: Scalars["String"]["input"];
  born?: InputMaybe<Scalars["Int"]["input"]>;
  actedInMovies?: InputMaybe<PersonActedInMoviesFieldInput>;
  directedMovies?: InputMaybe<PersonDirectedMoviesFieldInput>;
};

export type PersonDeleteInput = {
  actedInMovies?: InputMaybe<Array<PersonActedInMoviesDeleteFieldInput>>;
  directedMovies?: InputMaybe<Array<PersonDirectedMoviesDeleteFieldInput>>;
};

export type PersonDirectedMoviesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PersonDirectedMoviesAggregateInput>>;
  OR?: InputMaybe<Array<PersonDirectedMoviesAggregateInput>>;
  NOT?: InputMaybe<PersonDirectedMoviesAggregateInput>;
  node?: InputMaybe<PersonDirectedMoviesNodeAggregationWhereInput>;
};

export type PersonDirectedMoviesConnectFieldInput = {
  where?: InputMaybe<MovieConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<MovieConnectInput>>;
};

export type PersonDirectedMoviesConnectionSort = {
  node?: InputMaybe<MovieSort>;
};

export type PersonDirectedMoviesConnectionWhere = {
  OR?: InputMaybe<Array<PersonDirectedMoviesConnectionWhere>>;
  AND?: InputMaybe<Array<PersonDirectedMoviesConnectionWhere>>;
  NOT?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  node?: InputMaybe<MovieWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
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
  connect?: InputMaybe<Array<PersonDirectedMoviesConnectFieldInput>>;
  create?: InputMaybe<Array<PersonDirectedMoviesCreateFieldInput>>;
};

export type PersonDirectedMoviesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonDirectedMoviesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonDirectedMoviesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonDirectedMoviesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  released_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  released_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  released_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  released_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_GT?: InputMaybe<Scalars["Int"]["input"]>;
  released_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  released_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  released_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  released_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_LT?: InputMaybe<Scalars["Int"]["input"]>;
  released_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  released_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  released_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  released_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type PersonDirectedMoviesUpdateConnectionInput = {
  node?: InputMaybe<MovieUpdateInput>;
};

export type PersonDirectedMoviesUpdateFieldInput = {
  where?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  connect?: InputMaybe<Array<PersonDirectedMoviesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PersonDirectedMoviesDisconnectFieldInput>>;
  create?: InputMaybe<Array<PersonDirectedMoviesCreateFieldInput>>;
  update?: InputMaybe<PersonDirectedMoviesUpdateConnectionInput>;
  delete?: InputMaybe<Array<PersonDirectedMoviesDeleteFieldInput>>;
};

export type PersonDisconnectInput = {
  actedInMovies?: InputMaybe<Array<PersonActedInMoviesDisconnectFieldInput>>;
  directedMovies?: InputMaybe<Array<PersonDirectedMoviesDisconnectFieldInput>>;
};

export type PersonOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more PersonSort objects to sort People by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PersonSort>>;
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
  name?: InputMaybe<Scalars["String"]["input"]>;
  born?: InputMaybe<Scalars["Int"]["input"]>;
  born_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  born_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  actedInMovies?: InputMaybe<Array<PersonActedInMoviesUpdateFieldInput>>;
  directedMovies?: InputMaybe<Array<PersonDirectedMoviesUpdateFieldInput>>;
};

export type PersonWhere = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  born?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  born_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  born_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  born_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  born_LT?: InputMaybe<Scalars["Int"]["input"]>;
  born_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  born_GT?: InputMaybe<Scalars["Int"]["input"]>;
  born_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  OR?: InputMaybe<Array<PersonWhere>>;
  AND?: InputMaybe<Array<PersonWhere>>;
  NOT?: InputMaybe<PersonWhere>;
  /** @deprecated Use `actedInMovies_SOME` instead. */
  actedInMovies?: InputMaybe<MovieWhere>;
  /** @deprecated Use `actedInMovies_NONE` instead. */
  actedInMovies_NOT?: InputMaybe<MovieWhere>;
  /** Return People where all of the related Movies match this filter */
  actedInMovies_ALL?: InputMaybe<MovieWhere>;
  /** Return People where none of the related Movies match this filter */
  actedInMovies_NONE?: InputMaybe<MovieWhere>;
  /** Return People where one of the related Movies match this filter */
  actedInMovies_SINGLE?: InputMaybe<MovieWhere>;
  /** Return People where some of the related Movies match this filter */
  actedInMovies_SOME?: InputMaybe<MovieWhere>;
  actedInMoviesAggregate?: InputMaybe<PersonActedInMoviesAggregateInput>;
  /** @deprecated Use `directedMovies_SOME` instead. */
  directedMovies?: InputMaybe<MovieWhere>;
  /** @deprecated Use `directedMovies_NONE` instead. */
  directedMovies_NOT?: InputMaybe<MovieWhere>;
  /** Return People where all of the related Movies match this filter */
  directedMovies_ALL?: InputMaybe<MovieWhere>;
  /** Return People where none of the related Movies match this filter */
  directedMovies_NONE?: InputMaybe<MovieWhere>;
  /** Return People where one of the related Movies match this filter */
  directedMovies_SINGLE?: InputMaybe<MovieWhere>;
  /** Return People where some of the related Movies match this filter */
  directedMovies_SOME?: InputMaybe<MovieWhere>;
  directedMoviesAggregate?: InputMaybe<PersonDirectedMoviesAggregateInput>;
  /** @deprecated Use `actedInMoviesConnection_SOME` instead. */
  actedInMoviesConnection?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  /** @deprecated Use `actedInMoviesConnection_NONE` instead. */
  actedInMoviesConnection_NOT?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  /** Return People where all of the related PersonActedInMoviesConnections match this filter */
  actedInMoviesConnection_ALL?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  /** Return People where none of the related PersonActedInMoviesConnections match this filter */
  actedInMoviesConnection_NONE?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  /** Return People where one of the related PersonActedInMoviesConnections match this filter */
  actedInMoviesConnection_SINGLE?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  /** Return People where some of the related PersonActedInMoviesConnections match this filter */
  actedInMoviesConnection_SOME?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  /** @deprecated Use `directedMoviesConnection_SOME` instead. */
  directedMoviesConnection?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  /** @deprecated Use `directedMoviesConnection_NONE` instead. */
  directedMoviesConnection_NOT?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  /** Return People where all of the related PersonDirectedMoviesConnections match this filter */
  directedMoviesConnection_ALL?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  /** Return People where none of the related PersonDirectedMoviesConnections match this filter */
  directedMoviesConnection_NONE?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  /** Return People where one of the related PersonDirectedMoviesConnections match this filter */
  directedMoviesConnection_SINGLE?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  /** Return People where some of the related PersonDirectedMoviesConnections match this filter */
  directedMoviesConnection_SOME?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
};

export type RatedCreateInput = {
  rating: Scalars["Int"]["input"];
};

export type RatedSort = {
  rating?: InputMaybe<SortDirection>;
};

export type RatedUpdateInput = {
  rating?: InputMaybe<Scalars["Int"]["input"]>;
  rating_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  rating_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
};

export type RatedWhere = {
  rating?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  rating_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  rating_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  rating_NOT_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  rating_LT?: InputMaybe<Scalars["Int"]["input"]>;
  rating_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  rating_GT?: InputMaybe<Scalars["Int"]["input"]>;
  rating_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  OR?: InputMaybe<Array<RatedWhere>>;
  AND?: InputMaybe<Array<RatedWhere>>;
  NOT?: InputMaybe<RatedWhere>;
};

export type UserConnectInput = {
  ratedMovies?: InputMaybe<Array<UserRatedMoviesConnectFieldInput>>;
};

export type UserCreateInput = {
  email: Scalars["String"]["input"];
  passwordHash: Scalars["String"]["input"];
  passwordSalt: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  ratedMovies?: InputMaybe<UserRatedMoviesFieldInput>;
};

export type UserDeleteInput = {
  ratedMovies?: InputMaybe<Array<UserRatedMoviesDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  ratedMovies?: InputMaybe<Array<UserRatedMoviesDisconnectFieldInput>>;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserRatedMoviesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserRatedMoviesAggregateInput>>;
  OR?: InputMaybe<Array<UserRatedMoviesAggregateInput>>;
  NOT?: InputMaybe<UserRatedMoviesAggregateInput>;
  node?: InputMaybe<UserRatedMoviesNodeAggregationWhereInput>;
  edge?: InputMaybe<UserRatedMoviesEdgeAggregationWhereInput>;
};

export type UserRatedMoviesConnectFieldInput = {
  edge: RatedCreateInput;
  where?: InputMaybe<MovieConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<MovieConnectInput>>;
};

export type UserRatedMoviesConnectionSort = {
  node?: InputMaybe<MovieSort>;
  edge?: InputMaybe<RatedSort>;
};

export type UserRatedMoviesConnectionWhere = {
  OR?: InputMaybe<Array<UserRatedMoviesConnectionWhere>>;
  AND?: InputMaybe<Array<UserRatedMoviesConnectionWhere>>;
  NOT?: InputMaybe<UserRatedMoviesConnectionWhere>;
  node?: InputMaybe<MovieWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<MovieWhere>;
  edge?: InputMaybe<RatedWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<RatedWhere>;
};

export type UserRatedMoviesCreateFieldInput = {
  edge: RatedCreateInput;
  node: MovieCreateInput;
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
  NOT?: InputMaybe<UserRatedMoviesEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rating_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  rating_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  rating_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  rating_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  rating_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rating_GT?: InputMaybe<Scalars["Int"]["input"]>;
  rating_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  rating_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  rating_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  rating_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rating_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  rating_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  rating_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  rating_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  rating_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rating_LT?: InputMaybe<Scalars["Int"]["input"]>;
  rating_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  rating_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  rating_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  rating_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rating_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  rating_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  rating_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  rating_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  rating_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type UserRatedMoviesFieldInput = {
  connect?: InputMaybe<Array<UserRatedMoviesConnectFieldInput>>;
  create?: InputMaybe<Array<UserRatedMoviesCreateFieldInput>>;
};

export type UserRatedMoviesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserRatedMoviesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserRatedMoviesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserRatedMoviesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  released_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  released_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  released_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  released_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_GT?: InputMaybe<Scalars["Int"]["input"]>;
  released_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  released_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  released_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  released_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_LT?: InputMaybe<Scalars["Int"]["input"]>;
  released_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  released_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  released_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  released_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  released_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type UserRatedMoviesUpdateConnectionInput = {
  node?: InputMaybe<MovieUpdateInput>;
  edge?: InputMaybe<RatedUpdateInput>;
};

export type UserRatedMoviesUpdateFieldInput = {
  where?: InputMaybe<UserRatedMoviesConnectionWhere>;
  connect?: InputMaybe<Array<UserRatedMoviesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserRatedMoviesDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserRatedMoviesCreateFieldInput>>;
  update?: InputMaybe<UserRatedMoviesUpdateConnectionInput>;
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
  email?: InputMaybe<Scalars["String"]["input"]>;
  passwordHash?: InputMaybe<Scalars["String"]["input"]>;
  passwordSalt?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  ratedMovies?: InputMaybe<Array<UserRatedMoviesUpdateFieldInput>>;
};

export type UserWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT?: InputMaybe<Scalars["String"]["input"]>;
  email_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  email_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  email_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  email_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  passwordHash?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  passwordHash_NOT?: InputMaybe<Scalars["String"]["input"]>;
  passwordHash_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  passwordHash_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  passwordHash_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  passwordHash_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  passwordHash_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  passwordHash_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  passwordHash_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  passwordHash_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  passwordSalt?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  passwordSalt_NOT?: InputMaybe<Scalars["String"]["input"]>;
  passwordSalt_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  passwordSalt_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  passwordSalt_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  passwordSalt_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  passwordSalt_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  passwordSalt_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  passwordSalt_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  passwordSalt_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  OR?: InputMaybe<Array<UserWhere>>;
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  /** @deprecated Use `ratedMovies_SOME` instead. */
  ratedMovies?: InputMaybe<MovieWhere>;
  /** @deprecated Use `ratedMovies_NONE` instead. */
  ratedMovies_NOT?: InputMaybe<MovieWhere>;
  /** Return Users where all of the related Movies match this filter */
  ratedMovies_ALL?: InputMaybe<MovieWhere>;
  /** Return Users where none of the related Movies match this filter */
  ratedMovies_NONE?: InputMaybe<MovieWhere>;
  /** Return Users where one of the related Movies match this filter */
  ratedMovies_SINGLE?: InputMaybe<MovieWhere>;
  /** Return Users where some of the related Movies match this filter */
  ratedMovies_SOME?: InputMaybe<MovieWhere>;
  ratedMoviesAggregate?: InputMaybe<UserRatedMoviesAggregateInput>;
  /** @deprecated Use `ratedMoviesConnection_SOME` instead. */
  ratedMoviesConnection?: InputMaybe<UserRatedMoviesConnectionWhere>;
  /** @deprecated Use `ratedMoviesConnection_NONE` instead. */
  ratedMoviesConnection_NOT?: InputMaybe<UserRatedMoviesConnectionWhere>;
  /** Return Users where all of the related UserRatedMoviesConnections match this filter */
  ratedMoviesConnection_ALL?: InputMaybe<UserRatedMoviesConnectionWhere>;
  /** Return Users where none of the related UserRatedMoviesConnections match this filter */
  ratedMoviesConnection_NONE?: InputMaybe<UserRatedMoviesConnectionWhere>;
  /** Return Users where one of the related UserRatedMoviesConnections match this filter */
  ratedMoviesConnection_SINGLE?: InputMaybe<UserRatedMoviesConnectionWhere>;
  /** Return Users where some of the related UserRatedMoviesConnections match this filter */
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
