import React from 'react'
import { useRecoilValue } from 'recoil'

import { searchResultState, searchTermState } from '../Utils/store'
import MovieTab from './MovieTab'


const Results = () => {
  const searchResults = useRecoilValue(searchResultState)
  const searchTerm = useRecoilValue(searchTermState)

  return (
    <div>
      <h3> Results for "{searchTerm}" </h3>
      <ul> { searchResults && searchResults.map(movie => {
        return <MovieTab props={{...movie, action:'Nominate'}} key={movie.imdbID}  />
      } )} </ul>
    </div>
  )
}

export default Results
