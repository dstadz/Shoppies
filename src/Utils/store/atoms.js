import { atom } from 'recoil'

const session = JSON.parse(localStorage.getItem('nominated'))
export const nominatedState = atom({
  key: 'nominatedState',
  default: session || []
})

export const searchTermState = atom({
  key: 'searchTermState',
  default: ''
})

export const searchResultState = atom({
  key: 'searchResultState',
  default: []
})