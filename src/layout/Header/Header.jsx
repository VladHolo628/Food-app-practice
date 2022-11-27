import React from "react";
import { CartBtn } from "../../components/cart/CartBtn";
import icon from "../../img/phonepe-logo-icon.svg";

export const Header = ({ onOpenModal }) => {
  return (
    <header className="flex justify-between items-center px-6 py-3 bg-purple-100">
      <div className="w-16">
        <img src={icon} alt="Logo" />
      </div>
      <CartBtn onClick={onOpenModal} />
    </header>
  );
};
