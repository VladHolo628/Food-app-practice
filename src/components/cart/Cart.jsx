import React, { useContext, useState } from "react";

import { Modal } from "../Modal";
import CartContext from "../../store/cart-context-1";
import { CartItem } from "./CartItem";
import { Button } from "../UI/Button";
import CartForm from "./CartForm";

export const Cart = ({
  isOrdering,
  onClose,
  orderHandler,
  orderCancelingHandler,
}) => {
  const ctx = useContext(CartContext);
  const items = ctx.items;
  const totalAmount = ctx.totalAmount.toFixed(2);

  const itemsNotEmpty = items.length > 0;

  const addItemHandler = (item) => {
    ctx.addItem(item);
  };

  const removeItemHandler = (item) => {
    ctx.removeItem(item);
  };

  return (
    <Modal onClose={onClose}>
      <ul>
        {items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onAdd={addItemHandler.bind(null, { ...item, amount: 1 })}
              onRemove={removeItemHandler.bind(null, item)}
            ></CartItem>
          );
        })}
      </ul>
      <div className="mt-2 text-2xl">
        <span className="mr-2">Total:</span>
        <span>{totalAmount} $</span>
      </div>
      {isOrdering && (
        <CartForm
          isOrdering={isOrdering}
          orderCancelingHandler={orderCancelingHandler}
        />
      )}
      <div className="text-right ">
        {!isOrdering && (
          <>
            <Button onClick={onClose} classes="mr-5" primary={false}>
              Close
            </Button>
            {itemsNotEmpty && (
              <Button onClick={orderHandler} primary={true}>
                Order
              </Button>
            )}
          </>
        )}
      </div>
    </Modal>
  );
};
