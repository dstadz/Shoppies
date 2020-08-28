import React from 'react'
import { useRecoilState } from 'recoil'
import { searchResultState } from '../Utils/store'

const Results = () => {
  const [searchResults, setSearchResult] = useRecoilState(searchResultState)

  return (
    <div>
      results
      {searchResults}
    </div>
  )
}

export default Results
