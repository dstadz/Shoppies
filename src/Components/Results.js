import React from 'react'
import { useRecoilValue } from 'recoil'

import { searchResultState, searchTermState } from '../Utils/store'
import MovieTab from './MovieTab'
import { Card } from '../styles'


const Results = () => {
  const searchResults = useRecoilValue(searchResultState)
  const searchTerm = useRecoilValue(searchTermState)

  return (
    <Card>
      <h3> Results for "{searchTerm}" </h3>
      {/* initial key stroke will change search results to 'undefined', so AND logic avoids 'cannot map over undefined' error */}
      <ul>
        { searchResults && searchResults.map(movie => {
          return (
            <MovieTab
              key={movie.imdbID}
              props={{...movie, action:'Nominate'}}
            />
          )
        })}
      </ul>
    </Card>
  )
}

export default Results
