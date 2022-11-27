import { useState } from "react";

const useInput = (validationFunc) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validationFunc(enteredValue);

  console.log(isValid);

  const hasError = isTouched && !isValid;

  const inputChangeHandler = (e) => {
    setIsTouched(false);
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    enteredValue,
    inputChangeHandler,
    inputBlurHandler,
    hasError,
    isValid,
  };
};

export default useInput;
