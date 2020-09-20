import React, { ReactNode } from "react";

export interface Props {
  type: "primary" | "secondary" | "outlined";
  loading: boolean;
  prefixIcon: ReactNode;
  suffixIcon: ReactNode;
  label: string;
  block: boolean;
}

const Button = ({ type, prefixIcon, suffixIcon, label }: Props) => {
  return (
    <button className={`Button`}>
      {prefixIcon}
      {label ? label : "Button"}
      {suffixIcon}
    </button>
  );
};

export default Button;
