import React from 'react'
import { useRecoilState } from 'recoil'
import { searchResultState } from '../Utils/store'

const Results = () => {
  const [searchResults, setSearchResult] = useRecoilState(searchResultState)

  console.log(searchResults)
  return (
    <div>
      results
      {/* {searchResults} */}
    </div>
  )
}

export default Results
