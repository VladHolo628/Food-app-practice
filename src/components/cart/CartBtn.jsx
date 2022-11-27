import React, { useContext } from "react";
import CartContext from "../../store/cart-context-1";

export const CartBtn = ({ onClick }) => {
  const ctx = useContext(CartContext);
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className=" rounded pl-6 pr-9 py-1 bg-purple-300 text-purple-900 h-min hover:bg-purple-600 hover:text-purple-100"
      >
        Cart
      </button>
      <div className="absolute rounded-full top-1 right-1 bg-purple-100 w-6 flex justify-center items-center">
        {ctx.amount}
      </div>
    </div>
  );
};
