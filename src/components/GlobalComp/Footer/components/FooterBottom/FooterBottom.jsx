import { Contact, Discripton, SubContact, WrapperBottom } from "./FooterBottom.styled"

export const FooterBottom = () => {
  return (
    <WrapperBottom>
      <Discripton>
        <Contact>Головной офис</Contact>
        <SubContact>Находимся в ...</SubContact>
      </Discripton>
      <Discripton>
        <Contact>Телефон</Contact>
        <SubContact>+7 777 777 77 77</SubContact>
      </Discripton>
      <Discripton>
        <Contact>Почта</Contact>
        <SubContact>mail@mail.ru</SubContact>
      </Discripton>
    </WrapperBottom>
  );
};
