## Welcome to
# GraphQL Introduction
(right click) on README.md -> Open Previw (or Cmd + Shift + V)

#### GraphQL vs REST

REST approach vs Graph approach

![rest-vs-gql](https://gary.wenneker.org/content/images/2019/07/image-2.png)

#### GraphQL SDKs
- apollo
- graphql
- neo4j
- yoga
- vulcan

#### Include Apollo in existing project


#### Schema and Schema types
    - Schema types
        - Simple types (ID, Boolean, Float, Int, String)
        - Arrays and non-null ! [!]!
        - Object types (from simple types)
        - Custom scalar types
            - Date field
            - JSON (graphql-type-json)
        - Unions and interfaces

    - careful when editing
        - no empty statements
        - no starting or ending with comment
        - # single line comment
        - """ """ wrap multi line comment

#### Datasources
    - plugable and flexible inputs (api, dbs, files...)
![architecture-datasources](https://miro.medium.com/max/1400/1*f_XvFD7FvliMM74WHJ0vRQ.png)


#### Resolvers
    - The business logic of our application
    - default resolvers
    - (root, args, context, info)
    - resolvers are async and context independent
    - passing data between resolvers is dangerous
[query execution flow](https://medium.com/@__xuorig__/the-graphql-dataloader-pattern-visualized-3064a00f319f)
