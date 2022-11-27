import React, { useContext, useEffect, useState } from "react";
import useInput from "../../hooks/use-input";
import CartContext from "../../store/cart-context-1";
import { Button } from "../UI/Button";
const URL = "https://react-http-fdd39-default-rtdb.firebaseio.com/orders.json";

const CartForm = ({ orderCancelingHandler }) => {
  const ctx = useContext(CartContext);
  const [formIsValid, setFormIsValid] = useState(false);
  const {
    enteredValue: enteredName,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: nameIsNotValid,
    isValid: nameIsValid,
  } = useInput((value) => {
    return value.length !== 0;
  });

  const nameInputClasses = nameIsNotValid
    ? "rounded-xl ml-5 mb-4 mt-2 bg-red-200"
    : "rounded-xl ml-5 mb-4 mt-2";

  const phoneValidationFunc = (value) => {
    const isFull = value.length === 11;

    return isFull;
  };
  const {
    enteredValue: enteredPhone,
    inputChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    hasError: phoneIsNotValid,
    isValid: phoneIsValid,
  } = useInput((value) => {
    return value.length === 11;
  });

  const phoneInputClasses = phoneIsNotValid
    ? "rounded-xl ml-5 mb-4 mt-2 bg-red-200"
    : "rounded-xl ml-5 mb-4 mt-2";

  useEffect(() => {
    if (nameIsValid && phoneIsValid) {
      setFormIsValid(true);
      return;
    }
    setFormIsValid(false);
  }, [nameIsValid, phoneIsValid]);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const order = {
      items: ctx.items,
      total: ctx.totalAmount,
      name: enteredName,
      phone: enteredPhone,
    };
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    e.target.reset();
    orderCancelingHandler();
    ctx.reset();
  };
  return (
    <form className="py-2" onSubmit={formSubmitHandler}>
      <div className="flex mb-4">
        <div className="w-1/2 mr-4">
          <div className="flex flex-col">
            <label className="text-lg" htmlFor="name">
              Name:
            </label>
            <input
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
              className={nameInputClasses}
              id="name"
              type="text"
            />
            {nameIsNotValid && (
              <p className="text-xs text-red-500">Name can't be empty.</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-lg" htmlFor="phone">
              Phone number:
            </label>
            <input
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
              value={enteredPhone}
              className={phoneInputClasses}
              id="phone"
              type="tel"
              inputMode="numeric"
            />
            {phoneIsNotValid && (
              <p className="text-xs text-red-500">Invalid phone number.</p>
            )}
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex flex-col">
            <label className="text-lg" htmlFor="address">
              Address:
            </label>
            <input
              className=" rounded-xl ml-5 mb-4 mt-2"
              id="address"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg" htmlFor="payment">
              Payment method:
            </label>
            <select className=" rounded-xl ml-5 mb-4 mt-2" id="payment">
              <option value="online">Online</option>
              <option value="cash">Cash</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button onClick={orderCancelingHandler} primary={false} type="button">
          Cancel
        </Button>
        <Button
          disabled={!formIsValid}
          classes="w-1/2"
          primary={true}
          type="submit"
        >
          Confirm
        </Button>
      </div>
    </form>
  );
};

export default CartForm;
