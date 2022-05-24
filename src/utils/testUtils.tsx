import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// Import your own reducer
import detailReducer from "../store/detail/detail.slice";
import itemsReducer from "../store/items/items.slice";

function render(
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: { detail: detailReducer, items: itemsReducer },
      preloadedState,
    }),
    ...renderOptions
  }: {
    preloadedState?: any;
    store?: any;
  } = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
