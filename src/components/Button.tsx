import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  click: () => void;
}

const Button = ({ children, click, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={click}>
      {children}
    </button>
  );
};

export default Button;
