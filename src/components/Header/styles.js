import styled from "styled-components";

export const Container = styled.header`

  height: 200px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: hidden;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY};
  box-shadow: 1px 4px 10px #E2E2E2;
  

  display: flex;
  justify-content: space-between;

  padding: 0 80px;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 180px;
    height: 180px;
    border-radius: 50%;

  }

  > div {
    display: felx;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }
`