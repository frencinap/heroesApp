import { getHeroesbyPublisher } from "../../selectors/getHeoresbyPublisher"
import { HeroCard } from "./HeroCard"

export const HeroList = ({publisher}) => {

  const heroes = getHeroesbyPublisher(publisher)  

  return (
    <div className="row row-cols-1 row-cols-md-3 g-2">
        {
            heroes.map( hero => (
                <HeroCard 
                    key={ hero.id } {...hero}
                />    
            ))
        }   
    </div>
  )
}
