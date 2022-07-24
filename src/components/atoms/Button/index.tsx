import React from "react";
import { IStyledButton, StyledButton } from "./index.styles";

export interface IButton extends IStyledButton {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({
  children,
  onClick,
  size = "medium",
  styleType = "default",
  variant = "primary",
}: IButton): JSX.Element => {
  return (
    <StyledButton
      size={size}
      styleType={styleType}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
