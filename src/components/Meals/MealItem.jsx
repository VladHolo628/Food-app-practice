import React, { useContext } from "react";
import CartContext from "../../store/cart-context-1";
import { AmountInput } from "../UI/AmountInput";

export const MealItem = ({ img, name, description, price, id }) => {
  const ctx = useContext(CartContext);
  const onAddToCart = (amount) => {
    ctx.addItem({
      name,
      price,
      id,
      amount: amount,
    });
  };
  return (
    <div className="flex items-center bg-white rounded  mb-10 p-2 h-full">
      <img className="w-40 mr-10 shadow-lg positi" src={img} alt="" />
      <div className="mx-auto flex flex-col items-center">
        <h3 className="text-xl text-purple-700 mb-6">{name}</h3>
        <p className="mb-10">{description}</p>
        <AmountInput onAddToCart={onAddToCart} className="mx-auto" />
      </div>
      <p className="text-lg text-red-400 ml-20">{`${price}$`}</p>
    </div>
  );
};
