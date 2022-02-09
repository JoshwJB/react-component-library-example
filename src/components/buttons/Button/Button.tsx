import React, { FC, MouseEventHandler } from "react";
import styled from 'styled-components';
import * as variables from "../../../variables";

export interface ButtonProps {
    disabled?: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled.button<ButtonProps>`
  border: 1px solid ${variables.primary};
  font-size: ${variables.fontBody};
  font-family: "Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: ${variables.black};
  padding: ${variables.spaceX1};
  &:disabled {
    cursor: not-allowed;
  }
`

const Button: FC<ButtonProps> = ({
    children,
    ...props
}) => (
  <StyledButton
    type="button"
    {...props}
  >
    {children}
  </StyledButton>
);

export default Button;