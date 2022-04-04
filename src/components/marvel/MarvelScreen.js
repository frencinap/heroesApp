import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarvelScreen = () => {
  return (
    <div className='my-2'>
        <h1>MarvelScreen</h1>
        <hr/>
        <HeroList publisher="Marvel Comics" />
    </div>
  )
}
