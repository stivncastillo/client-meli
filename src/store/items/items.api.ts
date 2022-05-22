import { getItems } from "../../services/http";

export function fetchItems(query: string) {
  return getItems(query)
}
