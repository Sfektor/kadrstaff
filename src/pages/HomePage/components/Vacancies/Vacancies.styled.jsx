import styled from "styled-components";
import { Card } from "../../../../assets";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 25px;
  max-width: 1320px;
  margin-bottom: 15px;
  user-select: none;
`;
export const Title = styled.h3`
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  color: #171717;
  margin-top: 25px;
  margin-bottom: 15px;
`;
export const WrapperCard = styled.ul`
  display: flex;
  flex-direction: column;
  color: white;
  width: 420px;
  text-align: center;
  padding: 15px;
  background: url(${Card}) no-repeat center;
  border-radius: 15px;
  position: relative;
  overflow: hidden;

  :not(:last-child) {
    margin-bottom: 8px;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`;
export const TitleCard = styled.li`
  font-size: 18px;
  z-index: 2;
  -webkit-text-stroke: 1px rgba(149, 149, 149, 0.45);
`;
export const City = styled.li`
  font-size: 14px;
  z-index: 2;
  -webkit-text-stroke: 1px rgba(149, 149, 149, 0.45);
`;
export const Mounth = styled.li``;
export const Hour = styled.li`
  font-size: 14px;
  z-index: 2;
  -webkit-text-stroke: 1px rgba(149, 149, 149, 0.45);
`;
export const HeightColor = styled.span`
  position: relative;
  font-weight: 700;
  z-index: 2;
  -webkit-text-stroke: 1px rgba(149, 149, 149, 0.45);
`;
export const SubTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0px 10px;
  z-index: 2;
  -webkit-text-stroke: 1px rgba(149, 149, 149, 0.45);
`;
export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: "#ff5a30";
`;
export const ModalButton = styled.button`
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
  padding: 0px 20px 0px 20px;
  border-radius: 4px;
  z-index: 2;
`;
