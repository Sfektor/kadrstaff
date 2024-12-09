import { useContext } from "react";
import { ModalContext } from "../../../../context";
import {
  WrapperCard,
  City,
  Hour,
  Mounth,
  Title,
  Wrapper,
  TitleCard,
  HeightColor,
  SubTitle,
  StyledLink,
  ModalButton,
} from "./Vacancies.styled";

export const Vacancies = ({ data }) => {
  const { handleModalOpen } = useContext(ModalContext);
  return (
    <>
      <Title>Наши вакансии</Title>
      <Wrapper>
        {data.map((el) => {
          const { id, title, city, mounth, hour } = el;
          return (
            <WrapperCard key={id}>
              <TitleCard>
                <HeightColor>{title}</HeightColor>
              </TitleCard>
              <City>{city}</City>
              <Mounth>
                <HeightColor>З/П от {mounth} руб/мес</HeightColor>
              </Mounth>
              <Hour>{hour} руб/час</Hour>
              <ModalButton type="button" onClick={handleModalOpen}>
                Откликнуться
              </ModalButton>
            </WrapperCard>
          );
        })}
      </Wrapper>
      <SubTitle>
        Полный список вакансий находиться в разделе{" "}
        <StyledLink to="/vacancies">«Вакансии»</StyledLink>
      </SubTitle>
    </>
  );
};
