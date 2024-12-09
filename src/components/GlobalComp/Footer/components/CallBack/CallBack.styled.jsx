import styled from "styled-components";

export const Wrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 766px) {
  }
  > span,
  h4 {
    text-align: end;
    @media (max-width: 766px) {
      text-align: center;
    }
  }
  > * {
    &:first-child {
      margin-bottom: 10px;
    }
    margin-bottom: 20px;
  }
`;

export const CallBackHeader = styled.h4`
  color: white;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
`;

export const CallBackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff5a30;
  color: white;
  font-size: 14px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0.5px;
  text-align: center;
  padding: 0px 32px 0px 32px;
  border-radius: 4px;
`;

export const SocialContainer = styled.div`
  display: flex;
  margin-left: auto;
  @media (max-width: 766px) {
    margin: 0 auto;
  }
  > article {
    display: flex;
  }
`;
