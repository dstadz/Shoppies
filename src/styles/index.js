import styled from 'styled-components'

export const AppContainer = styled.section`
  background: blue;
  display:flex;
  flex-direction: column;
  text-align: center;

  div{
    background:red;
    display: flex;
    justify-content: space-around;
    align-items: stretch;
  }
`

export const Card = styled.div`
  width: 300px;
  flex-direction: column;
  border: solid 1px grey;
  align-self: flex-start;
  background: green;

`

export const Tab = styled.li`
  background: green;
  text-align: top;

`
