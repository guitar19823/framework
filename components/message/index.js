import React from 'react';
import ReactDOM from 'react-dom';
import { FaCheckCircle, FaExclamationCircle, FaBan } from "react-icons/fa";
import './index.css';

export const message = (text, type) => {
  const root = document.getElementById('root')
  const message = document.createElement('div');
  root.appendChild(message);

  const t = setTimeout(() => {
    root.removeChild(message);

    clearTimeout(t);
  }, 3000);

  const hundlers = {
    success: <FaCheckCircle className="success" />,
    warning: <FaExclamationCircle className="warning" />,
    error: <FaBan className="error" />,
  };

  ReactDOM.render(
    <div className="Message">
      {hundlers[type]}

      <span>{text}</span>
    </div>,
    message
  );
};