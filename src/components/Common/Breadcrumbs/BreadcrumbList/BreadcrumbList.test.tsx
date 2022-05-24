import React from "react";
import { render, screen, within } from "@testing-library/react";

import BreadcrumbList from "./BreadcrumbList";

describe("BreadcrumbList", () => {
  const categories = [
    {
      id: "abc123",
      name: "Test 1",
    },
    {
      id: "def456",
      name: "Test 2",
    },
  ];

  it("should render correctly", () => {
    render(<BreadcrumbList data={categories} />);
    expect(screen.getByText("Test 1")).toBeInTheDocument();
  });

  it("should render correctly with no data", () => {
    render(<BreadcrumbList data={[]} />);
    expect(screen.queryByText("Test 1")).not.toBeInTheDocument();
  });

  it("should render correct items length", () => {
    render(<BreadcrumbList data={categories} />);
    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");

    expect(items.length).toBe(2);
  });

  it("should render correct items", () => {
    render(<BreadcrumbList data={categories} />);
    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");

    expect(items[0]).toHaveTextContent("Test 1");
    expect(items[1]).toHaveTextContent("Test 2");
  });
});
