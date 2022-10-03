# Custom resolvers

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

[Person.ts](../../src/gql/Person.ts)
