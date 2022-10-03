# Cursor-based pagination

[Explaining GraphQL Connections](https://www.apollographql.com/blog/graphql/explaining-graphql-connections/)

## Movies query

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

Variables

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

## People query

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

Variables

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
