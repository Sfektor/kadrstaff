import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
  z-index: 999;
  margin-right: 10px;
  ul {
    display: flex;
    :not(:last-child) {
      margin-right: 80px;
      @media (max-width: 1600px) {
        margin-right: 40px;
      }
      @media (max-width: 1300px) {
        margin-right: 30px;
      }
    }
  }
  li,
  a {
    font-size: 16px;
    text-wrap: nowrap;
    cursor: pointer;
  }
  a {
    font-weight: 500;
  }
  div {
    display: none;
  }

  @media (max-width: 1000px) {
    position: absolute;
    top: 65px;
    left: 0;
    transform: translateX(-120%);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    background-color: #fff;
    padding: 25px;
    padding-left: 55px;
    box-shadow: 5px 2px 10px 5px rgba(0, 0, 0, 0.5);
    ${(props) =>
      props.open &&
      css`
        transform: translateX(0);
      `}
    ul {
      flex-direction: column;
      :not(:last-child) {
        margin-right: 0 !important;
      }
    }
    li {
      width: 100%;
      margin-bottom: 25px;
      &:last-child {
        margin: 0;
      }
    }
    a {
      display: block;
      width: 100%;
      margin-bottom: 20px;
      &:last-child {
        margin: 0;
      }
    }
    div {
      display: flex;
      align-items: center;
      margin-left: -30px;
      :last-child {
        margin-left: 10px;
      }
      svg {
        display: block;
        scale: 0.8;
      }
    }
  }
`;
