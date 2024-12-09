import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../../../context";
import { useOnClickOutside } from "../../../hooks/onClickOutside";
import { HamburgerButton, Social } from "../../OtherComp";
import { ContactsComp, MenuComp } from "./components";
import { HeaderContainer, Logo } from "./Header.styled";

export const Header = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  useOnClickOutside(node, () => {
    if (isMenuOpen) toggleMenuMode();
  });

  return (
    <>
      <HeaderContainer ref={node}>
        <Logo>
          <HamburgerButton />
          <Link to={"/"}>
            <img src="img/logo.png" alt="Logo" />
          </Link>
        </Logo>

        <MenuComp />

        <ContactsComp />
      </HeaderContainer>

      <Social
        styleWrapper={{ position: "fixed", right: "15px", top: "90px" }}
        styleLink={{ marginBottom: "5px" }}
      />
    </>
  );
};
