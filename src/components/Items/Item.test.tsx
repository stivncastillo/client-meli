import React from "react";
import Item from "./Item";
import { Router } from "react-router-dom";
import { render, screen } from "../../utils/testUtils";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";

describe("Item", () => {
  const history = createMemoryHistory();
  const item = {
    id: "MLA8125912",
    title: "Mochila de madera con cierre de botón",
    description: "Mochila de madera con cierre de botón",
    price: {
      currency: "ARS",
      amount: 4000,
      decimals: 2,
    },
    picture: "http://mla-s2-p.mlstatic.com/8125912-MLA3100827891_062019-I.jpg",
    condition: "new",
    free_shipping: true,
  };

  it("should render correctly", () => {
    render(
      <Router location={history.location} navigator={history}>
        <Item item={item} />
      </Router>
    );

    const itemComponent = screen.getByTestId("item-component");

    expect(itemComponent).toBeInTheDocument();
  });

  it("should navigate when click title", async () => {
    render(
      <Router location={history.location} navigator={history}>
        <Item item={item} />
      </Router>
    );

    await userEvent.click(screen.getByText(item.title));
    expect(screen.getByText(item.title)).toBeInTheDocument();
  });
});
