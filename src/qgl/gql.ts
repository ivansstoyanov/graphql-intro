import { ApolloServer } from 'apollo-server-express'

import { typeDefs } from './schemes'
import { resolvers } from './resolvers'
import DotaAPI from './api-dota'

const server = new ApolloServer({
    context: async ({ req }) => {
        return { user: { type: req.headers.authorization } }
    },
    typeDefs,
    resolvers,
    dataSources: () => ({
        dotaAPI: new DotaAPI()
    })
})

export const registerGQL = (app: any) => {
    server.applyMiddleware({ app })
}
