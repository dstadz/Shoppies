import styled from 'styled-components'

export const AppContainer = styled.section`
  border: 2px solid blue;

  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin: auto;
  width: 75%;

  .Container {
    border: 2px solid red;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin-top: 1rem;
  }
`

export const Card = styled.div`
  border: 4px solid green;

  min-width: 350px;
  flex-direction: column;
  border: solid 1px grey;
  align-self: flex-start;
`

export const Tab = styled.li`
  margin-bottom: .2rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  input {

  }
`

export const BannerContainer = styled.div`
  border: 2px solid purple;

  border-radius: 1rem;
  background: white;
  position: fixed;
  z-index: 2;
  top: 10rem;
  width: 24rem;
  padding:2rem;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`