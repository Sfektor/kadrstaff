import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: white;
  > ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    a {
      font-size: 18px;
    }
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
