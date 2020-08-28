import React, { useState } from 'react'
import { useRecoilState } from 'recoil'

import { nominatedState } from '../Utils/store'
import { Tab } from '../styles/'

const MovieTab = ({props}) => {
  const { Title, Year, imdbID, Type, Poster } = props
  const [nominated, setNominated] = useRecoilState(nominatedState)
  const [isNominated, setIsNominated] = useState(false)

  const nominate = () => {
    console.log(imdbID)
    setNominated(nominated.concat(props))

  }

  return (
    <Tab>
      <p>{Title}</p>
      <p>{Year}</p>
      <button
      onClick={()=> nominate()}
      >Nominate</button>
    </Tab>
  )
}

export default MovieTab
