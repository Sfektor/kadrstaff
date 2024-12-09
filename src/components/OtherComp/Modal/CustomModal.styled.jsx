import styled, { createGlobalStyle } from "styled-components";

export const Title = styled.h4`
  padding: 25px 35px 5px 35px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: red;
`;

export const SubTitle = styled.p`
  padding: 0px 15px 35px 15px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 20px;
  padding: 10px;
  transition: all 0.3s;
  font-weight: 500;
`;

export const StyledModal = createGlobalStyle`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(175, 175, 175, 0.7);
    overflow: hidden;
    overflow-y: auto;
    z-index: 999;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .madal-content {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 30.625rem;
    padding: 20px;
    background-color: white;
    border-radius: 16px;
    filter: drop-shadow(0 0 10px rgba(255, 48, 48, 0.7));
    overflow: hidden;
    overflow-y: auto;
    z-index: 1000;
  }
  .ReactModal__Overlay--after-open {
    opacity: 1;
  }
  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
`;
