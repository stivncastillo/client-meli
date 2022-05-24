import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
}

const Button = ({ primary, ...props }: Props) => {
  return (
    <button
      className={`button ${primary && "button__primary"}`}
      {...props}
    ></button>
  );
};

export default Button;
