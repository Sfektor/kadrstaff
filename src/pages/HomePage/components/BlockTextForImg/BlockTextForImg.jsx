import { IconCheckOk } from "../../../../assets/icons";
import { Wrapper, Text, Title } from "./BlockTextForImg.styled";

export const BlockTextForImg = () => {
  return (
    <Wrapper>
      <Title>Помогаем найти достойную и высокооплачиваемую работу в вашем городе</Title>
      <ul>
        <Text>
          <IconCheckOk />
          Выплата заработной платы без задержек
        </Text>
        <Text>
          <IconCheckOk />
          Официальное трудоустройство
        </Text>
        <Text>
          <IconCheckOk />
          Оплачиваемые больничные
        </Text>
        <Text>
          <IconCheckOk />
          Большой выбор вакансий
        </Text>
        <Text>
          <IconCheckOk />
          Есть вакансии без опыта работы
        </Text>
        <Text>
          <IconCheckOk />
          Предоставляем спецодежду
        </Text>
      </ul>
    </Wrapper>
  );
};
