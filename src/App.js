import React from 'react';

import SearchBar from './Components/SearchBar'
import Results from './Components/Results'
import Nominations from './Components/Nominations'

import { AppContainer } from './styles/index'

const App = () => {


  return (
    <AppContainer>
      <h1> The Shoppies </h1>
      <SearchBar />


      <div>
        <Results />
        <Nominations />
      </div>
    </AppContainer>
  );
}

export default App;
