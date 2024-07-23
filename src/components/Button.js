import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Button.css';

const Button = ({ type, onClick, children, icon }) => {
  return (
    <button type={type} onClick={onClick} className="custom-button">
      {icon && <FontAwesomeIcon icon={icon} className="icon" />} {/* Usa o ícone aqui */}
      {children}
    </button>
  );
};

export default Button;
