import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import { useRecoilState } from 'recoil'
import { searchTermState, searchResultState } from '../Utils/store'
import { findAllByTitle } from '@testing-library/react'




export const SearchBar = () => {
  const { register, handleSubmit, errors } = useForm();
  const [searchTerm, setSearchTerm] = useState('up')
  const [searchResults, setSearchResults] = useRecoilState(searchResultState)



  const onSubmit = ({ Title }) => {

  //call to get top 10 results
  axios.get(`http://www.omdbapi.com/?s=${Title}&apikey=${process.env.REACT_APP_OMDB_API}`)
    .then(res => { setSearchResults(res.data.Search) })
    .catch(err => { console.log(err) })
  };




  console.log(errors);
  return (
    <div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label> Movie Title </label>
        <input
          type="text"
          placeholder="Movie Title"
          name="Title"
          ref={register({required: true, maxLength: 80})}
        />

        <input type="submit" />
      </form>
    </div>

  );
}

export default SearchBar
