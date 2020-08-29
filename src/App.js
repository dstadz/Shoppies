import React from 'react';

import './App.css';
import SearchBar from './Components/SearchBar'
import Results from './Components/Results'
import Nominations from './Components/Nominations'



const App = () => {


  return (
    <div className="App">
      <h1> The Shoppies </h1>
      <SearchBar />
      <div style={{display:'flex', justifyContent:"space-around", alignItems:'top'}}>
        <Results />
        <Nominations />
      </div>
    </div>
  );
}

export default App;
