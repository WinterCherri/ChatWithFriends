import React from "react";

const Button = ({
  label = "Button",
  type = "",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      class={`text-white bg-primary hover:bg-primary focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text center ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
