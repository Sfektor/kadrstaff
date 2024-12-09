import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: clamp(1.25rem, 0.75rem + 2.5vw, 3.75rem);
  transform: translateY(-50%);
  width: calc(100% - 60px);
  user-select: none;
`;
export const Title = styled.h1`
  font-size: clamp(1rem, 0.688rem + 1.56vw, 2.563rem);
  line-height: 1.2;
  margin-bottom: 30px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
  width: 40%;
  @media (max-width: 1000px) {
    width: 60%;
  }
  @media (max-width: 550px) {
    width: 90%;
  }
`;
export const Text = styled.li`
  font-size: clamp(0.875rem, 0.8rem + 0.38vw, 1.25rem);
  line-height: 1.2;
  font-weight: 300;
  color: rgba(221, 221, 221);
  margin-bottom: 10px;
  svg {
    margin-right: 15px;
  }
`;
