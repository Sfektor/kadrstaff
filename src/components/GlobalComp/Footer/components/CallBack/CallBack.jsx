import { useContext } from "react";
import { ModalContext } from "../../../../../context";
import { Social } from "../../../../OtherComp";
import {
  Wrapper,
  CallBackButton,
  CallBackHeader,
  SocialContainer,
} from "./CallBack.styled";

export const CallBack = () => {
  const { handleModalOpen } = useContext(ModalContext);

  return (
    <Wrapper>
      <SocialContainer>
        <Social />
      </SocialContainer>
      <CallBackHeader>Ещё остались вопросы?</CallBackHeader>
      <span>Закажите звонок, наш менеджер перезвонит Вам и ответит на все вопросы</span>
      <CallBackButton type="button" onClick={handleModalOpen}>
        ЗАКАЗАТЬ ЗВОНОК
      </CallBackButton>
    </Wrapper>
  );
};
