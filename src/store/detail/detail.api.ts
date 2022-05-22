import { getItemDetail } from "../../services/http";

export function fetchItemDetail(id: string) {
  return getItemDetail(id)
}
