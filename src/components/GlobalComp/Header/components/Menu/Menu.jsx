import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MenuContext } from "../../../../../context";
import { IconEmail, IconTel } from "../../../../../assets/icons";
import { Wrapper } from "./Menu.styled";

export const MenuComp = () => {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <Wrapper open={isMenuOpen}>
      <ul>
        <li>
          <NavLink to={"/about"}>О компании</NavLink>
        </li>
        <li>
          <NavLink to={"/vacancies"}>Вакансии</NavLink>
        </li>
        <li>
          <NavLink to={"/contacts"}>Контакты</NavLink>
        </li>
        <li>
          <NavLink to={"/questions"}>Сотрудничество</NavLink>
        </li>
        <div>
          <IconTel />
          <a href="tel:+79999999">+7 (999) 999-99-99</a>
        </div>
        <div>
          <IconEmail />
          <a href="mailto:mail@mail.com">mail@mail.com</a>
        </div>
      </ul>
    </Wrapper>
  );
};
