import { Navigate, useParams } from "react-router-dom"
import { getHerobyId } from "../../selectors/getHeroesById"

export const HeroScreen = () => {

  const { heroId } = useParams()

  const hero = getHerobyId(heroId)

  if(!hero){
    return <Navigate to="/" />
  }

  return (
    <div>
        <h1>HeroScreen</h1>
        <p>
          { hero.superhero }
        </p>
    </div>
  )
}
