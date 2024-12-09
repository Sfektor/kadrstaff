import { useFormContext } from "react-hook-form";
import { useState } from "react";
import {
  PlaceholderBox,
  InputName,
  PlaceholderText,
  ErrorMessage,
} from "./NameInput.styled";

export const NameInput = ({ label }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [focusInput, setFocusInput] = useState("");

  return (
    <PlaceholderBox>
      <InputName
        type="text"
        name="Имя"
        autoComplete="off"
        style={errors.Имя ? { border: "1px solid red" } : {}}
        {...register("Имя", {
          required: "Поле обязательно к заполнению",
          minLength: {
            value: 2,
            message: "Поле должно быть длиннее 2 символов",
          },
          onChange: (e) => setFocusInput(e.target.value),
        })}
      />

      {errors.Имя && <ErrorMessage>{errors.Имя?.message}</ErrorMessage>}

      <PlaceholderText invalid={!!focusInput}>
        Введите имя <strong style={{ color: "red" }}>*</strong>
      </PlaceholderText>
    </PlaceholderBox>
  );
};
