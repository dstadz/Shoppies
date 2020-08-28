import React from 'react'
import { useForm } from 'react-hook-form'


import { useRecoilState } from 'recoil'
import { searchTermState } from '../Utils/store'




export const SearchBar = () => {
  const { register, handleSubmit, errors } = useForm();
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState)



  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
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
  );
}

export default SearchBar
