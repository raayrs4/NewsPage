import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  height: 150px;
  width: 100%;
  padding: 30px;
  gap: 100px;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
 
  background: ${({ theme }) => theme.COLORS.BLUE_200};
  color: white;
  
  .ComercialInfos {
    box-sizing: border-box;

    > p {
      margin-top: 10px;
      line-height: 25px;
    }
  }
`
