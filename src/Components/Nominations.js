import React from 'react'

import { useRecoilState } from 'recoil'
import { nominatedState } from '../Utils/store'



const Nominations = () => {
  const [nominated, setNominated] = useRecoilState(nominatedState)

  return (
    <div>
      nominations
      {nominated}
    </div>
  )
}

export default Nominations
