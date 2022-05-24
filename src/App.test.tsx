import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import { render, screen } from "./utils/testUtils";
import App from "./App";
import { responseList } from "./testValues/values";

export const handlers = [
  rest.get(`/items`, (req, res, ctx) => {
    return res(ctx.json(responseList), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App", () => {
  test("should render correctly with initial data", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );

    expect(
      screen.getByText(/No hay productos para mostrar/i)
    ).toBeInTheDocument();
  });
});
