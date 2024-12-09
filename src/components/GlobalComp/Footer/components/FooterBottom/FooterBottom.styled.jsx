import styled from "styled-components";
import { Wrapper } from "../../Footer.styled";

export const WrapperBottom = styled(Wrapper)`
  :not(:first-child) {
    text-align: center;
  }
  :last-child {
    text-align: end;
  }
  @media (max-width: 766px) {
    > div,
    span {
      text-align: center;
    }
  }
`;

export const Contact = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 700;
  color: white;
`;

export const SubContact = styled.span`
  font-size: 16px;
  color: #787a80;
`;

export const Discripton = styled.div`
  line-height: 21px;
  font-size: 14px;
  font-weight: 400;
  color: #787a80;
`;
