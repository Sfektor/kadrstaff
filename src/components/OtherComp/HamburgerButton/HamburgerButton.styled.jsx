import styled from "styled-components";

export const MenuButton = styled.button`
  display: block;
  transform-origin: 16px 11px;
  float: left;
  margin-right: 25px;
  outline: 0;
  border: 0;
  padding: 10px;
  padding-left: 0px;
  background: none;
  position: relative;
  top: 3.5px;
  @media (min-width: 1000px) {
    display: none;
  }
  @media (max-width: 375px) {
    margin-right: 18px;
  }

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(6px, 6px);
      width: 30px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(7px, -7px);
      width: 30px;
    }
  }
`;
export const Bar = styled.span`
  display: block;
  width: 32px;
  height: 3px;
  margin-bottom: 6px;
  background-color: black;
`;
