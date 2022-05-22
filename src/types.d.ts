export interface Item {
  id: string
  title: string
  condition: string
  price: {
    currency: string
    amount: number
    decimals: number
  }
  picture: string
  free_shipping: boolean
  description: string | null
}

export interface Autor {
  name: string
  lastname: string
}

export type DataResponse = {
  items: Item[]
  item: Item
  author: Autor
}

export interface ApiResponse extends AppResponse {
  success: boolean
  data?: DataResponse
  message: string
}