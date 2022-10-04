# Mutations

## Create

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

## Update

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

## Delete

```
mutation DeletePeople($where: PersonWhere) {
  deletePeople(where: $where) {
    nodesDeleted
    relationshipsDeleted
  }
}
```

Variables
```
{
  "where": {
    "name": "Cezary Pazura"
  }
}
```