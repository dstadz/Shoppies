import React from 'react'

import { useRecoilState } from 'recoil'
import { nominatedState } from '../Utils/store'
import MovieTab from './MovieTab'



const Nominations = () => {
  const [nominated, setNominated] = useRecoilState(nominatedState)

  return (
    <div>
      <h3> Nominated </h3>
      <ul> { nominated.map((movie) => <MovieTab props={movie} key={movie.imdbID} /> )} </ul>
    </div>
  )
}

export default Nominations
