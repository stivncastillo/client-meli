import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("should render correctly", () => {
    render(<Button>Hello</Button>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("should render a button with the class of primary", () => {
    render(<Button primary />);
    const primaryButton = screen.getByRole("button");
    expect(primaryButton).toHaveClass("button__primary");
  });

  it("should click button", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Comprar</Button>);
    const button = screen.getByRole("button");

    userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
