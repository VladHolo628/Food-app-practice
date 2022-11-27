import React from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-black/80 fixed w-screen h-screen z-10 cursor-pointer"
    ></div>
  );
};

const ModalContent = (props) => {
  return (
    <div className="rounded p-6 absolute bg-purple-50 w-1/3 z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div>{props.children}</div>
    </div>
  );
};

export const Modal = (props) => {
  const portalTarget = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        portalTarget
      )}
      {ReactDOM.createPortal(
        <ModalContent>{props.children}</ModalContent>,
        portalTarget
      )}
    </>
  );
};
