import { CartItem } from './CartItem'

export interface Cart {
  id: string
  items: CartItem[]
  subtotal: number
  total: number
  deliveryPrice: number
}
