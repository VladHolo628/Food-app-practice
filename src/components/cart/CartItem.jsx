import React from "react";
import { Button } from "../UI/Button";

export const CartItem = ({ onAdd, onRemove, name, amount, price }) => {
  return (
    <li className="flex p-2 text-lg justify-between items-center border-b-2">
      <p className="text-start">{name}</p>
      <div className="flex ml-auto mr-8">
        <p className="mr-6 p-1 border border-purple-300 rounded">x {amount}</p>

        <p className=" p-1 border border-purple-300 rounded">
          {(price * amount).toFixed(2)} $
        </p>
      </div>

      <div>
        <Button onClick={onAdd} classes="mr-2">
          +
        </Button>
        <Button onClick={onRemove}>-</Button>
      </div>
    </li>
  );
};
