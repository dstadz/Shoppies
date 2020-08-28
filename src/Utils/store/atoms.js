import { atom } from 'recoil'

export const nominatedState = atom({
  key: 'nominatedState',
  default: []
})

export const searchResultState = atom({
  key: 'searchResultState',
  default: []
})