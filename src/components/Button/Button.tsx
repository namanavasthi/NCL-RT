import React, { HTMLAttributes } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** used as button text */
  label: string;
}

/** cool little button */
const Button = ({ label, ...rest }: ButtonProps) => {
  return (
    <button className="uppercase bg-red-300 text-5xl" {...rest}>
      {label}
    </button>
  );
};

export default Button;
