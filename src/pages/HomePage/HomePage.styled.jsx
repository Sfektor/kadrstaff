import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;
export const ImgContainer = styled.div`
  position: relative;
  height: calc(100vh - 92px);
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 1000px) {
    height: calc(100vh - 73px);
  }
  @media (max-width: 550px) {
    height: calc(100vh - 67px);
  }
`;
