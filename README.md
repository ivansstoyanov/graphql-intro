# GraphQL Introduction

GraphQL is an application query language.
OR a structured way of making REST calls.

> Comes From Facebook. Open sourced in 2012. THe only thing that is actually well documented

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
- npm install apollo-server-express

```
import { ApolloServer, gql } from 'apollo-server-express'

const server = new ApolloServer({
    typeDefs: gql`
      type Query {
        hello: String
      }
    `,
    resolvers: {
      Query: {
        hello: () => 'Hello world!',
      },
    }
})

server.applyMiddleware({ app })
```

http://localhost:2020/graphql

#### Schema and Schema types
    - careful when editing
        - no empty statements
        - no starting or ending with comment
        - # single line comment
        - """ """ wrap multi line comment

    - Schema types
        - Simple types (ID, Boolean, Float, String)
        - Arrays and non-null ! [!]!
        - Object types (from simple types)
        - Custom scalar types
            - Date field
            - JSON (graphql-type-json)
        - Unions and interfaces

    - Mutation
    - Subscription


#### Datasources
    - plugable and flexible inputs (api, dbs, files...)

![architecture-datasources](https://miro.medium.com/max/1400/1*f_XvFD7FvliMM74WHJ0vRQ.png)


#### Resolvers
    - The business logic of our application
    - default resolvers
    - (root, args, context, info)
    - resolvers are async and context independent
    - passing data between resolvers is dangerous

![query-execution](https://miro.medium.com/max/1400/1*tSO8TeQ9mYNWRzA2FqYlsQ.png)

#### Query execution
    
    - Query flow - parse / validation / execution
    - AST (abstract syntax tree)

![resolvers](https://miro.medium.com/max/1400/1*mVgIVQqklGwSOvBnv3mJrg.gif)

[query execution flow](https://medium.com/@__xuorig__/the-graphql-dataloader-pattern-visualized-3064a00f319f)

#### Examples
- [x] GetAll
- [x] GetOne
- [x] GetMany
- [x] GetFiltered (wrap response)
- [x] dynamic resolvers
- [x] frontend query example


#### Context (Authentication & Authorization)
- combine resolvers
- wrap resolvers

[Authentication & Authorization done right](https://medium.com/the-guild/authentication-and-authorization-in-graphql-and-how-graphql-modules-can-help-fadc1ee5b0c2)


#### Mutations
- POST requests in REST
- Input objects are different from types (even if there are not)


#### Directives
- @deprecated, @skip, @include
- @cacheControl
[more examples](https://www.apollographql.com/docs/graphql-tools/schema-directives/#directiveResolvers-option)

#### Performance and caching
- n + 1 problem
- gql is all about performance and caching

#### Further reading
[Local state management](https://www.apollographql.com/docs/tutorial/local-state/)

[GraphQL Modules](https://medium.com/the-guild/authentication-and-authorization-in-graphql-and-how-graphql-modules-can-help-fadc1ee5b0c2)

[Error tracking and Visualize service](https://blog.apollographql.com/apollo-engine-and-graphql-error-tracking-e7dd3ce8b99d)

[Metrics and logging - Appolo Graph Manager](https://www.apollographql.com/docs/apollo-server/monitoring/metrics/)

[Instana](https://www.instana.com/blog/instanas-graphql-monitoring-support/)

[Caching](https://www.apollographql.com/docs/apollo-server/performance/caching/)

[More caching](https://blog.apollographql.com/graphql-caching-the-elephant-in-the-room-11a3df0c23ad)

[No queries frontend - GQLESS](https://gqless.dev/)

[A way to write schema not in string](https://github.com/apollographql/graphql-tag)

[How to generate schema for the frontend](https://medium.com/open-graphql/automatically-generate-typescript-definitions-for-graphql-queries-with-apollo-codegen-e73eae72b561)