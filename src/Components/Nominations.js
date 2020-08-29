import React from 'react'
import { useRecoilValue } from 'recoil'

import { nominatedState } from '../Utils/store'
import MovieTab from './MovieTab'



const Nominations = () => {
  const nominated = useRecoilValue(nominatedState)

  return (
    <div>
      <h3> Nominated </h3>
      <ul> { nominated.map((movie) => {
        return <MovieTab props={{...movie, action:'Remove'}} key={movie.imdbID} />
      } )} </ul>
    </div>
  )
}

export default Nominations
