import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #1e212c;
  padding: 20px;
  position: relative;
  z-index: 100;
  @media (max-width: 1000px) {
    column-gap: 20px;
  }
  @media (max-width: 766px) {
    flex-direction: column;
    column-gap: 0px;
    row-gap: 10px;
  }

  > div {
    flex: 0 1 33.33%;
    @media (max-width: 1000px) {
      flex: 0 1 50%;
    }
  }
`;

export const Politic = styled.div`
  bottom: 15px;
  right: 20px;
  position: absolute;
  background-color: #1e212c;
  color: #ff5a30;
  font-size: 12px;
  text-align: right;
`;

export const Razor = styled.div`
  width: 100%;
  min-height: 1px;
  background-color: hsla(0, 0%, 100%, 0.15);
`;
