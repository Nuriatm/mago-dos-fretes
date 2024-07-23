import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Button.css";

const Button = ({ type, onClick, children, icon, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-button ${className}`}
    >
      {icon && <FontAwesomeIcon icon={icon} className="icon" />}{" "}
      {/* Usa o ícone aqui */}
      {children}
    </button>
  );
};

export default Button;
