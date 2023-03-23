import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  
  img {
    width: 100%;
    height: 22rem; 
  
    object-fit: cover;
    border-radius: 6px;

    transition: all 200ms;
    filter: brightness(0.5) saturate(1.5);
  }
    
  img:hover {
    opacity: 0.4;
  }

  h3 {
    position: absolute;
    bottom: 10rem;
    left: 2rem;

    color: white;
  }

  p {
    
  }
`