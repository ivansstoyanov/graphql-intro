import { ApolloServer } from 'apollo-server-express'

import { typeDefs } from './schemes'
import { resolvers } from './resolvers'
import DotaAPI from './api-dota'

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        dotaAPI: new DotaAPI()
    })
})

export const registerGQL = (app: any) => {
    server.applyMiddleware({ app })
}
