import { combineResolvers } from 'graphql-resolvers'

const bio = (_: any, __: any) => _.bio

const isAuthenticated = (_: any, __: any, { user }: any) => {
    if (!user.type) {
        return new Error('Not authenticated')
    }
}

const resolvers = {
    Query: {
        heroes: (_: any, __: any, { dataSources }: any) =>
            dataSources.dotaAPI.getAllHeroes(),

        getHero: async (_: any, { heroId }: any, { dataSources }: any) => {
            return dataSources.dotaAPI.getHeroById({ heroId })

            // return heroes.find((h: any) => h.attributes.HeroID === heroId)
        },

        getHeroes: async (_: any, { heroIds }: any, { dataSources }: any) => {
            return dataSources.dotaAPI.getHeroByIds({ heroIds })

            // return heroes.find((h: any) => h.attributes.HeroID === heroId)
        },

        filterHeroes: async (_: any, { skip = 0, take = 5 }: any, { dataSources, user }: any) => {
            let items = await dataSources.dotaAPI.getAllHeroes()
            if (user && user.type) {
                items = items.filter((i: any) => i.attributes.Team === user.type)
            }
            return {
                count: items.length,
                heroes: items.slice(skip, take + skip)
            }
        }
    },
    Mutation: {
        addHero: async (_: any, { hero }: any, { dataSources }: any) => {
            const newHero = await dataSources.dotaAPI.addHero(hero)

            return {
                success: true,
                message: 'вътре е',
                hero: newHero
            }
        }
    },

    Hero: {
        name: async (hero: any, _: any, { dataSources }: any) => {
            return hero.name.toUpperCase()
        },
        bio: combineResolvers(
            isAuthenticated,
            bio
        )
    },

    Builds: {
        // DOTA_Item_Build_Starting_Items: async (attributes: any, _: any, { dataSources }: any) => {
        //     // console.log('attr', attributes)
        //     const items = await dataSources.dotaAPI.getAllItems()
        //     const currentItems =
        //       items.filter((i: any) => attributes.DOTA_Item_Build_Starting_Items.includes(i.tag))

        //     return currentItems
        // }
    }

}

const itemBuilds = ['DOTA_Item_Build_Starting_Items', 'DOTA_Item_Build_Early_Game', 'DOTA_Item_Build_Late_Items']
for (let index = 0; index < itemBuilds.length; index++) { // USE FOR!!!
    const itemBuild = itemBuilds[index]

    resolvers.Builds[itemBuild] = async (attributes: any, { count = 100 }: any, { dataSources }: any) => {
        // console.log('attr', attributes)
        const items = await dataSources.dotaAPI.getAllItems()
        const currentItems = items.filter((i: any) => attributes[itemBuild].includes(i.tag))

        return count ? currentItems.slice(0, count) : currentItems
    }
}

export { resolvers }
