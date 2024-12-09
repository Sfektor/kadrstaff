import { useEffect, useContext } from "react";
import { useFormContext } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { NameInput, PhoneInput } from "../";
import { ModalContext } from "../../../context";
import {
  Form,
  ButtonSubmit,
  RequiredText,
  RequiredSymbol,
  SendText,
  StyledLink,
} from "./FormCallback.styled";

export const FormCallback = ({
  onSubmitForm,
  setCheckCapture,
  checkCapture,
  sendingForm,
}) => {
  const { handleSubmit, setValue, reset } = useFormContext();
  const { handleModalClose } = useContext(ModalContext);
  useEffect(() => {
    reset();
  }, [onSubmitForm]);

  const onHCaptchaChange = () => {
    setValue("access_key", "e94e60e6-51bc-4310-a06c-de14089855cd");
    setCheckCapture(!checkCapture);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      <NameInput />
      <PhoneInput />

      {!checkCapture && (
        <div style={{ marginTop: "20px" }}>
          <HCaptcha
            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
            reCaptchaCompat={false}
            onVerify={onHCaptchaChange}
          />
        </div>
      )}

      <ButtonSubmit type="submit" disabled={sendingForm || !checkCapture}>
        Отправить
      </ButtonSubmit>

      <RequiredText>
        Поля отмеченные <RequiredSymbol>*</RequiredSymbol> обязательны к заполнению
      </RequiredText>

      <SendText>
        Нажимая кнопку "отправить" вы подтверждаете, что ознакомлены с
        <StyledLink to="/policy" onClick={handleModalClose}>
          {" "}
          политикой конфиденциальности
        </StyledLink>
      </SendText>
    </Form>
  );
};
