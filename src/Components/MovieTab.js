import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { nominatedState } from '../Utils/store'
import { Tab } from '../styles/'

const MovieTab = ({props}) => {
  const { Title, Year, imdbID,/* Type, Poster,*/ action } = props
  const [nominated, setNominated] = useRecoilState(nominatedState)
  const [isNominated, setIsNominated] = useState(false)



  const handleClick = () => {

    if (action === 'Nominate'
    && nominated.length < 5
    && !nominated.some(movie => movie.imdbID === imdbID)) {
      setNominated(nominated.concat(props))
      setIsNominated(true)
    }


    if (action === 'Remove') {
      setIsNominated(false)
      const newList = nominated.filter((movie) => imdbID !== movie.imdbID)
      setNominated(newList)
    }
    console.log(nominated)
  }



  return (
    <Tab>
      <h5>{Title}</h5>
      <span>{Year}</span>
      <button
      id={imdbID}
      disabled={isNominated}
      onClick={()=> handleClick()}
      >{action}</button>
    </Tab>
  )
}

export default MovieTab
