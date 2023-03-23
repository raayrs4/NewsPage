import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-areas: 
  "A A B"
  "C D D"; 
  margin: 2rem 0;
  
  div:nth-child(1) {
    grid-area: A;
  }

  div:nth-child(2) {
    grid-area: B;
  }

  div:nth-child(3) {
    grid-area: C;
  }

  div:nth-child(4) {
    grid-area: D;
  }
`