// import { RESTDataSource } from 'apollo-datasource-rest'
import { DataSource } from 'apollo-datasource'
import { heroes } from './db/heroes'
import { items } from './db/items'

class DotaAPI extends DataSource {
    // public constructor () {
    //     super()
    //     this.baseURL = 'https://api.opendota.com/api/'
    // this.fetch('/heros')
    // }

    private heroReducer (hero: any) {
        return {
            ...hero,
            id: hero.attributes.HeroID,
            builds: hero.item_builds
        }
    }

    public async getAllHeroes () {
        await new Promise(resolve => setTimeout(resolve, 300))

        return heroes.map(h => this.heroReducer(h))
    }

    public async getHeroById ({ heroId }: any) {
        await new Promise(resolve => setTimeout(resolve, 300))

        return this.heroReducer(
            heroes.find((h: any) => h.attributes.HeroID === heroId)
        )
    }

    public async getHeroByIds ({ heroIds }: any) {
        return Promise.all(
            heroIds.map((heroId: any) => this.getHeroById({ heroId }))
        )
    }

    public async getAllItems () {
        await new Promise(resolve => setTimeout(resolve, 300))

        return items
    }

    public async addHero (hero: any) {
        await new Promise(resolve => setTimeout(resolve, 300))

        const newHero = JSON.parse(JSON.stringify(heroes[0]))
        newHero.name = hero.name
        newHero.attributes.HeroID = heroes.length + 1
        heroes.push(newHero)

        return newHero
    }
}

export default DotaAPI
