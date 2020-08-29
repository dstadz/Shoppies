import React, { useEffect } from 'react'
import axios from 'axios'

import { useRecoilState, useSetRecoilState } from 'recoil'
import { searchTermState, searchResultState } from '../Utils/store'




export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState)
  const setSearchResults = useSetRecoilState(searchResultState)



  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.REACT_APP_OMDB_API}`)
    .then(res => { setSearchResults(res.data.Search) })
    .catch(err => { console.log(err) })
  },[searchTerm])



  return (
    <form>
      <label> Movie Title </label>
      <input
        type="text"
        value={searchTerm}
        placeholder="Movie Title"
        onChange={e => setSearchTerm(e.target.value)}
      />
    </form>
  );
}

export default SearchBar
