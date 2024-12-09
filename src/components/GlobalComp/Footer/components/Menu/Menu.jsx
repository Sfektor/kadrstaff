import { Wrapper } from "./Menu.styled";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to={"/"}>Главная</Link>
        </li>
        <li>
          <Link to={"/about"}>О компании</Link>
        </li>
        <li>
          <Link to={"/vacancies"}>Вакансии</Link>
        </li>
        <li>
          <Link to={"/contacts"}>Контакты</Link>
        </li>
        <li>
          <Link to={"/questions"}>Вопрос-Ответ</Link>
        </li>
      </ul>
    </Wrapper>
  );
};
