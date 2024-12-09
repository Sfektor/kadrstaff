import styled from "styled-components";

export const Wrapper = styled.div`
  &:nth-child(${(props) => (props.isMarginBottom ? props.isMarginBottom : null)}) {
    margin-top: 1px;
    margin-bottom: 2px;
  }
`;
