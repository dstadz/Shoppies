import React from 'react';
import { useRecoilValue } from 'recoil'
import SearchBar from './Components/SearchBar'
import Results from './Components/Results'
import Nominations from './Components/Nominations'
import Banner from './Components/Banner'
import { nominatedState } from './Utils/store'
import { AppContainer } from './styles/index'

const App = () => {
  const nominated = useRecoilValue(nominatedState)

  return (
    <AppContainer>
      <h1> The Shoppies </h1>
      <SearchBar />
      { nominated.length === 5  && <Banner/> }
      <div className='Container'>
        <Results />
        <Nominations />
      </div>
    </AppContainer>
  );
}

export default App;
