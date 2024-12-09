import styled from "styled-components";

export const PlaceholderBox = styled.label`
  display: block;
  position: relative;
`;

export const PlaceholderText = styled.div`
  display: ${(props) => (!props.invalid ? "block" : "none")};
  width: 100%;
  line-height: 37px;
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  color: #888;
  cursor: text;
  user-select: none;
`;

export const InputName = styled.input`
  padding: 2px 5px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px 15px;
  border-radius: 8px;
  width: 100%;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;
