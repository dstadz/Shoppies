import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { nominatedState } from '../Utils/store'
import { Tab } from '../styles/'

const MovieTab = ({props}) => {
  const { Title, Year, imdbID, /* Type, Poster,*/ action } = props
  const [nominated, setNominated] = useRecoilState(nominatedState)
  const [isNominated, setIsNominated] = useState(false)



  const handleClick = () => {
    //adds Movie to 'Nominated'
    if (action === 'Nominate' //only deals with MovieTabs in 'Results'
    && nominated.length < 5 //denies entries after 5th tab
    && !nominated.some(movie => movie.imdbID === imdbID)) { //denies addition if movie already nominated
      setNominated(nominated.concat(props))
      setIsNominated(true)
    }

    // removes MovieTabs from 'Nominations'
    if (action === 'Remove') {
      setIsNominated(false)
      const newList = nominated.filter((movie) => imdbID !== movie.imdbID)
      setNominated(newList)
    }
  }

  //updates MovieTabs in 'Results" to make them reclickabel whe removed from nominated list
  useEffect(() => {
    if (!nominated.some(movie => movie.imdbID === imdbID))
    setIsNominated(false)
  }, [nominated])


  return (
    <Tab>
      <h5>{Title}</h5>
      <span>{Year}</span>
      <button
      disabled={isNominated && (action ==='Nominate')}
      onClick={()=> handleClick()}
      >{action}</button>
    </Tab>
  )
}

export default MovieTab
