import React, { HTMLAttributes } from "react";
import "./Button.css";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button;
