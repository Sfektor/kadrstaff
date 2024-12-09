import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonSubmit = styled.button`
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.disabled ? "rgba(255, 0, 0, 0.3)" : "rgba(255, 0, 0, 0.7)"};
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  margin-bottom: 15px;
  margin-top: 20px;
`;

export const RequiredText = styled.p`
  margin-top: 30px;
  line-height: 18px;
  font-size: 14px;
`;

export const RequiredSymbol = styled.span`
  margin-top: 30px;
  line-height: 18px;
  color: red;
`;

export const SendText = styled.p`
  margin-top: 15px;
  line-height: 18px;
  font-size: 14px;
`;

export const StyledLink = styled(Link)`
  color: red;
`;
