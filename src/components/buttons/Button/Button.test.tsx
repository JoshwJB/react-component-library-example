import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from "./Button";

describe("on Button mount", () => {
  it("should render disabled button", () => {
    render(<Button onClick={console.log} disabled>Example Button</Button>);
    
    expect(screen.getByRole("button")).toBeDisabled();
  })
});