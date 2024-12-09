import styled from "styled-components";

export const ContactsContainer = styled.div`
  display: flex;
`;
export const ContactWrapper = styled.div`
  margin-right: 60px;
  @media (max-width: 1600px) {
    margin-right: 30px;
  }
  @media (max-width: 1300px) {
    margin-right: 15px;
  }
  @media (max-width: 550px) {
    display: none;
  }
  display: flex;
  align-items: center;
  span {
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
  }
  a {
    font-size: 18px;
    @media (max-width: 1400px) {
      font-size: 16px;
    }
    font-weight: 400;
    line-height: 27px;
  }
`;
export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1300px) {
    display: none;
  }
`;
export const Feedback = styled.button`
  text-decoration: underline;
  font-weight: 700;
  @media (max-width: 375px) {
    font-weight: 700;
    font-size: 14px;
  }
`;
export const IconsWrapper = styled.a`
  margin-top: 4px;
  margin-right: 10px;
`;
