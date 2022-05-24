import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

describe("Header", () => {
  const onSearch = jest.fn();

  it("should render correctly", () => {
    render(<Header onSearch={onSearch} />);
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("should call onSearch when search button is clicked", () => {
    render(<Header onSearch={onSearch} />);
    const searchInput = screen.getByPlaceholderText("Search");
    userEvent.type(searchInput, "hola");
    userEvent.click(screen.getByRole("button"));
    expect(onSearch).toHaveBeenCalledWith("hola");
  });
});
