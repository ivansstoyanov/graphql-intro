import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Query {
    heroes: [Hero]
    getHero(heroId: ID!): Hero
    getHeroes(heroIds: [ID]): [Hero]
    filterHeroes(
      skip: Int
      take: Int
    ): HeroResult!
  }
  type Mutation {
    addHero(hero: HeroInput!): NewHeroResult!
  }
  type NewHeroResult {
    success: Boolean!
    message: String
    hero: Hero!
  }

  type Hero {
    name: String
    bio: String
    attributes: Attributes
    item_builds: Builds
  }
  type Attributes {
    Role: String
    Complexity: Int
    Team: TeamType
    HeroID: Int
  }
  type Builds {
    DOTA_Item_Build_Starting_Items(count: Int): [Item]
    DOTA_Item_Build_Early_Game(count: Int): [Item]
    DOTA_Item_Build_Late_Items(count: Int): [Item]
  }
  type Item {
    name: String
    category: String
    cost: Int
  }

  type HeroResult {
    count: Int!
    heroes: [Hero]
  }

  enum TeamType {
    Good
    Bad
  }

  input HeroInput {
    name: String
  }

`

export { typeDefs }

// // // Custom scalar types
// //
// const GraphQLJSON = require('graphql-type-json');

// const schemaString = gql`
//   scalar JSON

//   type Foo {
//     aField: JSON
//   }

//   type Query {
//     foo: Foo
//   }
// `;

// const resolveFunctions = {
//   JSON: GraphQLJSON
// };

// // // Custom scalar types DATE
// //
// // const typeDefs = gql`
// //   scalar Date

// //   type MyType {
// //     created: Date
// //   }`

// // const { GraphQLScalarType } = require('graphql');
// // const { Kind } = require('graphql/language');

// // const resolvers = {
// //   Date: new GraphQLScalarType({
// //     name: 'Date',
// //     description: 'Date custom scalar type',
// //     parseValue(value) {
// //       return new Date(value); // value from the client
// //     },
// //     serialize(value) {
// //       return value.getTime(); // value sent to the client
// //     },
// //     parseLiteral(ast) {
// //       if (ast.kind === Kind.INT) {
// //         return parseInt(ast.value, 10); // ast value is always in string format
// //       }
// //       return null;
// //     },
// //   }),
// // };
