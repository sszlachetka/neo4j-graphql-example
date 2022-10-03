## Quick start

1. Start free Neo4j instance at [Neo4j AuraDB](https://neo4j.com/cloud/aura-free)
    1. You can start with either empty instance or Movies example
    1. Save generated password for later
    1. Detailed instruction can be found [here](https://neo4j.com/developer/graphql/#_using_the_neo4j_graphql_library_with_neo4j_auradb)
1. If you started with empty instance then query your data in Neo4j Browser
    1. Run following command `:play movie-graph` to start Movie Graph built-in example. More details about built-in examples can be found [here](https://neo4j.com/developer/example-data/#built-in-examples).
    2. Move to the second step of the example and run Create data script to create the movie graph.
1. Copy `.env.example` to `.env`. Set NEO4J_USER, NEO4J_PASSWORD and NEO4J_URI variables so that they point to you new Neo4j instance.
1. Install packages & start the server
    ```
    npm install
    ```
    ```
    npm run dev
    ```
1. Open [http://localhost:4000](http://localhost:4000) in you web browser and click `Query your server` button on Apollo Server welcome page. Run example query.
    ```
    query Movies {
      movies {
        title
        released
        actors {
          name
          born
          age
        }
        director {
          name
          born
          age
        }
      }
    }
    ```

## Neo4j

Neo4j is an open-source, NoSQL, native graph database that provides an ACID-compliant transactional backend for applications. In Neo4j, information is organized as nodes, relationships, and properties.

It turns out that "relational" databases handle relationships poorly. In a graph database, there are no JOINs or lookups. Relationships are stored natively alongside the data elements (the nodes) in a much more flexible format.

### Cypher

Cypher is Neo4j’s graph query language that allows to store and retrieve data from the graph database.

Vocabulary:
- Node - data entity
- Node label - allow to specify certain types of entities to look for or create
- Relationship - directed connection between two nodes
- Relationship type - categorize and add meaning to a relationship, similar to how labels group nodes
- Property - key-value pair property can be stored on both nodes and relationships

[Node or relationship properties](https://neo4j.com/docs/getting-started/current/cypher-intro/#cypher-properties)

> Sally likes Graphs
```
(p:Person {name: "Sally"})-[rel:LIKES]->(g:Technology {type: "Graphs"})
```

[source](https://neo4j.com/docs/getting-started/current/)

### Examples

[Movies Sandbox](https://neo4j.com/sandbox/)

Update & Delete statements (not included in Movies Sandbox)

Generate test data
```
create (p:Person {name: 'Jan Kowalski'})
create (m:Movie {title: 'Chłopaki nie płaczą'})
create (p)-[w:WATCHED]->(m)
return type(w)
```

Update
```
match (p:Person {name: 'Jan Kowalski'})
set p+={age: 21, gender: 'male'}
return p
```

Delete
```
match (p:Person {name: 'Jan Kowalski'}), (m:Movie {title: 'Chłopaki nie płaczą'})
detach delete p, m
```

[Neo4j AuraDB](https://neo4j.com/cloud/aura-free/)

[Example Datasets](https://neo4j.com/developer/example-data/)

## GraphQL

GraphQL is a query language for APIs. Gives clients the power to ask for exactly what they need and nothing more

[graphql.org](https://graphql.org)

Apollo Server is an open-source, spec-compliant GraphQL server that's compatible with any GraphQL client

[Apollo Server](https://www.apollographql.com/docs/apollo-server)

## The glue

By supplying the [Neo4j GraphQL Library]( https://neo4j.com/docs/graphql-manual/current) with a set of type definitions describing the shape of your graph data, it can generate an entire executable schema with all of the additional types needed to execute queries and mutations to interact with your Neo4j database.

[Diagram](https://neo4j.com/developer/graphql/#_the_neo4j_graphql_library)

### Type definitions

[gql](src/gql)

### Queries

```
query Query {
  people {
    name
    born
    actedInMovies {
      title
      released
    }
    directedMovies {
      title
      released
      actors {
        name
      }
    }
  }
}
```
### Mutations

#### Create

```
mutation CreateMovies($input: [MovieCreateInput!]!) {
  createMovies(input: $input) {
    movies {
      title
      actors {
        name
      }
      director {
        name
      }
    }
  }
}
```

Variables

```
{
  "input": [
    {
      "title": "Chłopaki nie płaczą",
      "released": 2000,
      "actors": {
        "create": [
          {
            "node": {
              "name": "Tomasz Bajer",
              "born": 1979
            }
          },
          {
            "node": {
              "name": "Cezary Pazura",
              "born": 1962
            }
          }
        ]
      },
      "director": {
        "create": {
          "node": {
            "name": "Olaf Lubaszenko",
            "born": 1968
          }
        }
      }
    }
  ]
}
```

#### Update

```
mutation UpdateMovies($where: MovieWhere, $update: MovieUpdateInput) {
  updateMovies(where: $where, update: $update) {
    movies {
      title
      actors {
        name
      }
    }
  }
}
```

Variables

```
{
  "where": {
    "title": "Chłopaki nie płaczą"
  },
  "update": {
    "title": "The Terminator",
    "actors": [
      {
        "create": [
          {
            "node": {
              "name": "Arnold Schwarzenegger",
              "born": 1947
            }
          }
        ],
        "disconnect": [
          {
            "where": {
              "node": {
                "name": "Tomasz Bajer"
              }
            }
          }
        ]
      }
    ]
  }
}
```

### Filtering

```
query Movies($where: MovieWhere) {
  movies(where: $where) {
    title
    released
    actors {
      name
      born
    }
    director {
      name
      born
    }
  }
}
```

Variables

```
{
  "where": {
    "released_LTE": 1990,
    "actors_ALL": {
      "born_LTE": 1961
    },
    "director": {
      "born_GTE": 1950
    }
  }
}
```

### Sorting
```
query Movies($options: MovieOptions, $actorsOptions: PersonOptions) {
  movies(options: $options) {
    title
    released
    actors(options: $actorsOptions) {
      name
      born
    }
  }
}
```

Variables

```
{
  "options": {
    "sort": [
      {
        "released": "DESC"
      }
    ]
  },
  "actorsOptions": {
    "sort": [
      {
        "born": "ASC"
      }
    ]
  }
}
```

### Offset-based pagination
```
query People($options: PersonOptions) {
  people(options: $options) {
    name
    born
  }
}
```

Variables
```
{
  "options": {
    "sort": [
      {
        "born": "ASC"
      }
    ],
    "limit": 5,
    "offset": 0
  }
}
```

### Cursor-based pagination

[Explaining GraphQL Connections](https://www.apollographql.com/blog/graphql/explaining-graphql-connections/)

Movies query

```
query Movies($where: MovieWhere, $sort: [MovieActorsConnectionSort!], $first: Int, $after: String) {
  movies(where: $where) {
    title
    released
    actorsConnection(sort: $sort, first: $first, after: $after) {
      totalCount
      pageInfo {
        endCursor
      }
      edges {
        node {
          name
          born
        }
      }
    }
  }
}
```

Movies query variables

```
{
  "where": {
    "title": "Twister"
  },
  "sort": [
    {
      "node": {
        "born": "ASC"
      }
    }
  ],
  "first": 2,
  "after": null
}
```

People query

```
query PeopleConnection($first: Int, $sort: [PersonSort], $after: String) {
  peopleConnection(first: $first, sort: $sort, after: $after) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        name
        born
      }
    }
  }
}
```

People query variables

```
{
  "first": 5,
  "sort": [
    {
      "born": "ASC"
    }
  ],
  "after": null
}
```

### Custom resolvers

```
  type Person {
    name: String!
    born: Int
    age: Int @computed(from: ["born"])
    actedInMovies: [Movie!]!
      @relationship(type: "ACTED_IN", properties: "ActedIn", direction: OUT)
    directedMovies: [Movie!]! @relationship(type: "DIRECTED", direction: OUT)
  }
```

`@computed` field directive
1. Requires custom resolver
1. The field can be included in a set of fields returned by a query
1. The field cannot be used to filter nor to sort the data

[Person.ts](src/gql/Person.ts)

### Auth & OGM

Configure `Neo4jGraphQLAuthJWTPlugin`
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

Sign up mutation
```
mutation SignUp($email: String!, $password: String!) {
  signUp(email: $email, password: $password)
}
```
Sign up variables
```
{
  "email": "user1@my.com",
  "password": "secret"
}
```

Sign in mutation
```
mutation SignIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password)
}
```
Sign in variables
```
{
  "email": "user1@my.com",
  "password": "secret"
}
```

Define authorization rules. For instance, rule below always appends predicate to Cypher WHERE clause when User entity is queried.
```
extend type User @auth(rules: [{ where: { id: "$jwt.sub" } }])
```

Other types of authorization rules can be found [here](https://neo4j.com/docs/graphql-manual/current/auth/authorization/)

`@auth` directive cannot be used on custom resolvers, but JWT payload is available in the context object that is passed to resolver function, See more details in [rateMovie.ts](src/gql/User/rateMovie.ts).

Rate movie mutation
```
mutation RateMovie($movieTitle: String!, $rating: Int!) {
  rateMovie(movieTitle: $movieTitle, rating: $rating)
}
```
Rate movie variables
```
{
  "movieTitle": "Twister",
  "rating": 10
}
```

Rated movies query
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

## Useful links
[Neo4j GraphQL Quickstart](https://neo4j.com/developer/graphql/)

[Neo4j GraphQL Examples](https://github.com/neo4j/graphql/tree/master/examples)
