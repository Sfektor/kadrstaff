import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1000px) {
    padding: 10px;
  }
  justify-content: space-between;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  @media (max-width: 1300px) {
    scale: 0.9;
  }
  @media (max-width: 375px) {
    scale: 0.75;
    position: relative;
    left: -15px;
    max-width: 210px;
    margin-right: 10px;
  }
`;
