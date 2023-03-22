import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BLUE_200};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  width: 100px;
  height: 40px;
  border: 0;
  padding: 0 10px;
  margin-top: 40px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`