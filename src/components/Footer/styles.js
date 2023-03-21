import styled from "styled-components";

export const Container = styled.footer`

  grid-area: footer;

  height: 150px;
  width: 100%;

  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.COLORS.BLUE_200};
  color: white;

  text-align: center;
  justify-content: center;
`

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  
  > ul {
    display: flex;
    list-style-type: none;
    gap: 15px;
    margin-top: 25px;
  }
  
  > li {
    margin: 4px;
  }

  > li:hover {
    color: #FFBB33;
  }
`