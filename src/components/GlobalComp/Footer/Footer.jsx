import { Wrapper, Politic, Razor } from "./Footer.styled";
import { Link } from "react-router-dom";
import { Description, Menu, CallBack, FooterBottom } from "./components";

export const Footer = () => {
  return (
    <>
      <Wrapper>
        <Description />

        <Menu />

        <CallBack />

        <Politic>
          <Link to={"/policy"}>Политика конфиденцальности</Link>
        </Politic>
      </Wrapper>

      <Razor />

      <FooterBottom />
    </>
  );
};
