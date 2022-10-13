# Security

## Restricting access to specific entities & fields

1. Exclude specific entity operations with `@exclude` directive
2. Use JWT tokens
    1. Configure `Neo4jGraphQLAuthJWTPlugin`

        ```
          const neoSchema = new Neo4jGraphQL({
            typeDefs,
            resolvers,
            plugins: {
              auth: new Neo4jGraphQLAuthJWTPlugin({
                secret: config.NEO4J_GRAPHQL_JWT_SECRET,
              }),
            },
          });
        ```
    1. Define authorization rules for entities and fields. For instance, rule below always appends predicate to Cypher WHERE clause when User entity is queried.
        ```
        extend type User @auth(rules: [{ where: { id: "$jwt.sub" } }])
        ```

        Other types of authorization rules can be found [here](https://neo4j.com/docs/graphql-manual/current/auth/authorization/)

        `@auth` directive cannot be used on custom resolvers, but JWT payload is available in the context object that is passed to resolver function.

1. Walk through User's [type definition](../../src/gql/User/index.ts).

### Sign up mutation
```
mutation SignUp($email: String!, $password: String!) {
  signUp(email: $email, password: $password)
}
```
Variables
```
{
  "email": "user1@my.com",
  "password": "secret"
}
```

### Sign in mutation
```
mutation SignIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password)
}
```
Variables
```
{
  "email": "user1@my.com",
  "password": "secret"
}
```

### Rate movie mutation
```
mutation RateMovie($movieTitle: String!, $rating: Int!) {
  rateMovie(movieTitle: $movieTitle, rating: $rating)
}
```
Variables
```
{
  "movieTitle": "Twister",
  "rating": 10
}
```

### Rated movies query
```
query Query {
  users {
    id
    email
    ratedMoviesConnection {
      edges {
        rating
        node {
          title
        }
      }
    }
  }
}
```
