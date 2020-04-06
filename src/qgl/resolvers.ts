const resolvers = {
    Query: {
        heroes: (_: any, __: any, { dataSources }: any) => dataSources.dotaAPI.getAllHeroes(),
        getHero: async (_: any, { heroId }: any, { dataSources }: any) => {
            return dataSources.dotaAPI.getHeroById({ heroId })

            // return heroes.find((h: any) => h.attributes.HeroID === heroId)
        }
    }
}

export { resolvers }
