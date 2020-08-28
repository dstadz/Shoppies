import { atom } from 'recoil'

export const nominatedState = atom({
  key: 'nominatedState',
  default: []
})

export const searchTermState = atom({
  key: 'searchTermState',
  default: ''
})

export const searchResultState = atom({
  key: 'searchResultState',
  default: []
})