import { heroes } from '../data/Heroes'

export const getHeroesbyPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics']
    
    if ( !validPublishers.includes(publisher)) {
        throw new Error(`${publisher}  no es un publicador válido`)
    }
    return heroes.filter( hero => hero.publisher === publisher)
}