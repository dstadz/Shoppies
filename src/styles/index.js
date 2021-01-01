import styled from 'styled-components'

export const AppContainer = styled.section`
  display:flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  width: 75%;
  max-width: 900px;

  div{
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }
`

export const Card = styled.div`
  width: 49%;
  flex-direction: column;
  border: solid 1px grey;
  align-self: flex-start;

`

export const Tab = styled.li`
  text-align: top;
  display: flex;
  align-items: center;

`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background: green;
  input {

  }
`