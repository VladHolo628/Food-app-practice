import React from "react";

export const Card = (props) => {
  return (
    <div className="p-4 bg-purple-100 rounded shadow">{props.children}</div>
  );
};
