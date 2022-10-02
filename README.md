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

Sally likes Graphs
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
create (m:Movie {title: 'Chlopaki nie placza'})
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
match (p:Person {name: 'Jan Kowalski'}), (m:Movie {title: 'Chlopaki nie placza'})
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

#### Type definitions

[typeDefs.ts](src/typeDefs.ts)

#### Queries

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
#### Mutations

##### Create

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

##### Update

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

#### Filtering

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

#### Sorting
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

#### Offset-based pagination
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

#### Cursor-based pagination

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


- OGM
- Custom resolvers
- Auth?

## Run the API
```
npm run dev
```

## Useful links
Quick-start: https://neo4j.com/developer/graphql/
Neo4j GraphQL Library features: https://neo4j.com/product/graphql-library/
https://neo4j.com/developer-blog/create-a-typescript-apollo-server-and-live-database-with-unit-tests/
https://www.apollographql.com/docs/apollo-server/testing/testing/


## TODO
1. Why import hints doesn't work in test/
2. Use absolute import paths?