import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { hendlePhoneInput, onPhoneKeyDown, onPhonePaste } from "./utils/hendlePhoneInput";
import { InputNumber, PlaceholderBox, PlaceholderText } from "./PhoneInput.styled";

export const PhoneInput = ({ label }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [focusInput, setFocusInput] = useState("");

  return (
    <PlaceholderBox>
      <InputNumber
        type="Телефон"
        onKeyDown={onPhoneKeyDown}
        onPaste={onPhonePaste}
        name="Tel"
        maxLength={18}
        autoComplete="off"
        style={
          errors.Телефон
            ? { border: "1px solid red", marginTop: "20px" }
            : { marginTop: "20px" }
        }
        {...register("Телефон", {
          required: "Поле обязательно к заполнению",
          minLength: {
            value: 16,
            message: "Поле должно быть длиннее 16 символов",
          },
          maxLength: {
            value: 18,
            message: "Поле не должно быть длиннее 18 символов",
          },
          onChange: (e) => {
            setFocusInput(e.target.value);
            hendlePhoneInput(e);
          },
        })}
      />
      {errors.Телефон && (
        <span style={{ color: "red", fontSize: "12px" }}>{errors.Телефон?.message}</span>
      )}
      <PlaceholderText invalid={!focusInput}>
        Введите номер телефона <strong style={{ color: "red" }}>*</strong>
      </PlaceholderText>
    </PlaceholderBox>
  );
};
