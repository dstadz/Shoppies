import styled from 'styled-components'

export const AppContainer = styled.section`
  display:flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  width: 75%;

  div{
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }
`

export const Card = styled.div`
  width: 300px;
  flex-direction: column;
  border: solid 1px grey;
  align-self: flex-start;

`

export const Tab = styled.li`
  text-align: top;

`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background: green;
  input {

  }
`