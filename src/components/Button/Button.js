import React from "react";
import "./Button.css";

export const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="btn-global">   
      {children}
    </button>
  );
};

export default Button;
