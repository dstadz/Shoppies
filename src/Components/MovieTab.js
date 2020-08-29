import React, { useState } from 'react'
import { useRecoilState } from 'recoil'

import { nominatedState } from '../Utils/store'
import { Tab } from '../styles/'

const MovieTab = ({props}) => {
  const { Title, Year, imdbID, Type, Poster, action } = props
  const [nominated, setNominated] = useRecoilState(nominatedState)




  const handleClick = () => {
    if (action === 'Nominate') setNominated(nominated.concat(props))
    if (action === 'Remove') {
      const newList = nominated.filter((movie) => imdbID != movie.imdbID)
      setNominated(newList)
    }
    console.log(nominated)
  }

  return (
    <Tab>
      <h5>{Title}</h5>
      <span>{Year}</span>
      <button
      onClick={()=> handleClick()}
      >{action}</button>
    </Tab>
  )
}

export default MovieTab
