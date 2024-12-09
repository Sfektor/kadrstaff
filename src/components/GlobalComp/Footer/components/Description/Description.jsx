import { Wrapper, Top } from "./Description.styled";
import { Link } from "react-router-dom";

export const Description = () => {
  return (
    <Wrapper>
      <Top>
        <Link to={"/"}>
          <img src="img/logo.png" alt="Logo" />
        </Link>
      </Top>
      <br />
      «КадрСтафф» — это место где Вы найдёте высокооплачиваемую работу! Сотрудничаем с
      большим количеством организаций напрямую, без посредников! <br />
      <br /> Мы ценим своих сотрдников, поэтому гарантируем своевременные выплаты,
      социальные гарантии, комфортное место работы и лучшие условия труда!
    </Wrapper>
  );
};
