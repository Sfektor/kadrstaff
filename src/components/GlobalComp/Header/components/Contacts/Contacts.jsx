import { useContext } from "react";
import { ModalContext } from "../../../../../context";
import { IconEmail, IconTel } from "../../../../../assets/icons";
import {
  ContactWrapper,
  Contacts,
  ContactsContainer,
  Feedback,
  IconsWrapper,
} from "./Contacts.styled";

export const ContactsComp = () => {
  const { handleModalOpen } = useContext(ModalContext);

  return (
    <ContactsContainer>
      <ContactWrapper>
        <IconsWrapper href="tel:+79999999">
          <IconTel />
        </IconsWrapper>
        <Contacts>
          <span>Пн-Пт (08:00-17:00)</span>
          <a href="tel:+79999999">+7 (999) 999-99-99</a>
        </Contacts>
      </ContactWrapper>
      <ContactWrapper>
        <IconsWrapper href="mailto:mail@mail.com">
          <IconEmail />
        </IconsWrapper>
        <Contacts>
          <span>Почта для связи</span>
          <a href="mailto:mail@mail.com">mail@mail.com</a>
        </Contacts>
      </ContactWrapper>
      <Feedback onClick={handleModalOpen}>Перезвоните мне!</Feedback>
    </ContactsContainer>
  );
};
