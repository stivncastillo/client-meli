import { getItems } from "../../services/http";

// A mock function to mimic making an async request for data
export function fetchItems(query: string) {
  return getItems(query)
}
