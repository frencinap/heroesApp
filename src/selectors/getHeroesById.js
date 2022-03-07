import { heroes } from '../data/Heroes'

export const getHerobyId = ( id = ' ') => {
    return heroes.find( hero => hero.id === id)
}