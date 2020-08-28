import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './App.css';
import SearchBar from './Components/SearchBar'
import Results from './Components/Results'
import Nominations from './Components/Nominations'



function App() {
  const [data, setData] = useState('')

  // useEffect(() => {
  //   axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.OMDB_API}`)
  //   .then(res => { setData(res.data) })
  //   .catch(err => { console.log(err) })

  // }, [])

  return (
    <div className="App">
      <h1> The Shoppies </h1>
      <SearchBar />
      <Results />
      <Nominations />
    </div>
  );
}

export default App;
