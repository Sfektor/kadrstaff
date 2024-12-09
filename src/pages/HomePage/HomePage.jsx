import { Wrapper, ImgContainer } from "./HomePage.styled";
import { General } from "../../assets";
import { vacanciesData, questionsData } from "../../MockData";
import { BlockTextForImg, Vacancies, Questions } from "./components";

export const HomePage = () => {
  return (
    <>
      <Wrapper>
        <ImgContainer>
          <img src={General} alt="logo" />
        </ImgContainer>
        <BlockTextForImg />
      </Wrapper>

      <Vacancies data={vacanciesData} />

      <Questions data={questionsData} />
    </>
  );
};
