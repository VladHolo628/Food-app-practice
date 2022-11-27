import React, { useContext, useState, useRef } from "react";

export const AmountInput = ({ onAddToCart }) => {
  const inputRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    onAddToCart(+inputRef.current.value);
  };

  return (
    <div className="">
      <div className="ml-auto flex flex-col items-center">
        <label className="text-md mb-5" htmlFor="amount">
          Amount
        </label>
        <form onSubmit={submitHandler}>
          <input
            defaultValue={1}
            ref={inputRef}
            id="amount"
            className="rounded mr-5"
            type="number"
            step="1"
            max="5"
            min="1"
          />
          <button
            className="text-md rounded p-2 bg-purple-400 text-purple-50 w-20 hover:bg-purple-600"
            type="submit"
          >
            Add +
          </button>
        </form>
      </div>
    </div>
  );
};
