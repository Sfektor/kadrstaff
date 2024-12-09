const getInputNumberValue = (value) => value.replace(/\D/g, "");

export const hendlePhoneInput = (event) => {
  let input = event.target;
  let inputNumberValue = getInputNumberValue(input.value);
  let formattedInputValue = "";
  let selectionStart = input.selectionStart;

  if (!inputNumberValue) return (input.value = "");

  if (input.value.length !== selectionStart) {
    if (event.nativeEvent.data && /\D/g.test(event.nativeEvent.data)) {
      input.value = inputNumberValue;
    }
    return;
  }

  if (["7", "8", "9"].indexOf(inputNumberValue[0]) > -1) {
    if (inputNumberValue[0] === "9") input.value = "7" + inputNumberValue;
    let firstSymbols = inputNumberValue[0] === "9" ? "8" : "+7";
    formattedInputValue = firstSymbols + " ";
    if (inputNumberValue.length > 1) {
      formattedInputValue += "(" + inputNumberValue.substring(1, 4);
    }
    if (inputNumberValue.length >= 5) {
      formattedInputValue += ") " + inputNumberValue.substring(4, 7);
    }
    if (inputNumberValue.length >= 8) {
      formattedInputValue += "-" + inputNumberValue.substring(7, 9);
    }
    if (inputNumberValue.length >= 10) {
      formattedInputValue += "-" + inputNumberValue.substring(9, 11);
    }
  } else {
    return (input.value = "+" + inputNumberValue);
  }

  input.value = formattedInputValue;
};

export const onPhoneKeyDown = (event) => {
  let input = event.target;
  if (event.keyCode === 8 && getInputNumberValue(input.value).length === 1)
    input.value = "";
};

export const onPhonePaste = (event) => {
  let pasted = event.clipboardData || window["clipboardData"];
  let input = event.target;
  let inputNumberValue = getInputNumberValue(input.value);

  if (pasted) {
    const pastedText = pasted.getData("Text");
    if (/\D/g.test(pastedText)) input.value = inputNumberValue;
  }
};
