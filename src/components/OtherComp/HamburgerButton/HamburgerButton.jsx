import { useContext } from "react";
import { MenuContext } from "../../../context/MenuContext";
import { MenuButton, Bar } from "./HamburgerButton.styled";

export const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => toggleMenuMode();

  return (
    <MenuButton
      className={isMenuOpen ? "active" : ""}
      aria-label="Открыть главное меню"
      onClick={clickHandler}
    >
      <Bar />
      <Bar />
      <Bar />
    </MenuButton>
  );
};
