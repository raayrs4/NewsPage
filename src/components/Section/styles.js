import styled from "styled-components";

export const Container = styled.section`
  display: block;
  justify-content: center;
  box-sizing: border-box;
  
  > ul {
    font-size: 20px;
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
  }

  > li:hover {
    color: #FFBB33;
  }
`