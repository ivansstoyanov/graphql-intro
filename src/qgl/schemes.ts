import { gql } from 'apollo-server-express'

const typeDefs = gql`
    type Query {
        heroes: [Hero]
        getHero(heroId: ID): Hero
    }

    type Mutation {
        getHero(hero: HeroInput!): Hero!
    }

    type Hero {
        id: ID
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
        DOTA_Item_Build_Starting_Items: [Item]
        DOTA_Item_Build_Early_Game: [Item]
    }
    type Item {
        name: String
        category: String
        cost: Int
    }

    enum TeamType {
        Good
        Bad
    }

    input HeroInput {
        id: ID!
        name: String!
    }
`

export { typeDefs }
