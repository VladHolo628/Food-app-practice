import React from "react";

export const Button = (props) => {
  const isPrimary = props.primary
    ? "bg-purple-400 border-transparent"
    : "bg-purple-50 border-purple-400";
  const classes = props.classes;
  return (
    <button
      onClick={props.onClick}
      className={`px-6 py-2 rounded shadow enabled:hover:bg-purple-600 border disabled:opacity-50  ${isPrimary} ${classes}`}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
