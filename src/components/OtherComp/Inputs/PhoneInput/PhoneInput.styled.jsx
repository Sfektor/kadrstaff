import styled from "styled-components";

export const InputNumber = styled.input`
  padding: 10px 15px;
  border: 0;
  border-radius: 8px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  width: 100%;
`;

export const PlaceholderBox = styled.label`
  display: block;
  position: relative;
`;

export const PlaceholderText = styled.div`
  display: ${(props) => (props.invalid ? "block" : "none")};
  width: 100%;
  line-height: 37px;
  position: absolute;
  left: 15px;
  top: 22px;
  color: #888;
  cursor: text;
  user-select: none;
`;
