import React, { HTMLAttributes } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="uppercase bg-red-300 text-5xl">{props.label}</button>;
};

export default Button;
