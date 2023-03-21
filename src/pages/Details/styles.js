import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 200px auto 150px;
  grid-template-areas:
  "header"
  "content"
  "footer";

  > main {
    grid-area: content;
    padding: 0 64px;
  }
`

export const Content = styled.div`
  margin: 0 auto;
`