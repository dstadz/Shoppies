import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import { useRecoilState } from 'recoil'
import { searchTermState, searchResultState } from '../Utils/store'




export const SearchBar = () => {
  const { register, handleSubmit, /*errors*/ } = useForm();
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState)
  const [searchResults, setSearchResults] = useRecoilState(searchResultState)



  const onSubmit = ({ Title }) => {
    setSearchTerm(Title)
    axios.get(`http://www.omdbapi.com/?s=${Title}&apikey=${process.env.REACT_APP_OMDB_API}`)
  .then(res => { setSearchResults(res.data.Search) })
  .catch(err => { console.log(err) })
};


useEffect(() => {
  axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.REACT_APP_OMDB_API}`)
  .then(res => {
    setSearchResults(res.data.Search)
    console.log(searchResults)
  })
  .catch(err => { console.log(err) })
},[searchTerm])




  // console.log(errors);
  console.log(searchTerm, searchResults)
  return (
    <div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label> Movie Title </label>
        <input
          type="text"
          name="Title"
          value={searchTerm}
          placeholder="Movie Title"
          onChange={e => setSearchTerm(e.target.value)}
          ref={register({required: true, maxLength: 80})}
        />

        <input type="submit" />
      </form>
    </div>

  );
}

export default SearchBar
