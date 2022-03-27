import React, { HTMLAttributes } from "react";
import "./Button.scss";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button;
