import React, { FC, MouseEventHandler } from "react";
import styled from 'styled-components';
import * as colours from "../../../styles/colours";

interface Props {
    disabled?: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled.button<Props>`
  border: 1px solid ${colours.primary}
`

const Button: FC<Props> = ({
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