import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { Cart } from '../Interfaces/Cart'
import { CartItem } from '../Interfaces/CartItem'
import { addItemToCart } from '../reducers/cart/actions'
import { cartItemsReducer } from '../reducers/cart/reducer'

interface CartContextProviderProps {
  children: ReactNode
}

interface CreateContextType {
  cart: Cart
  subtotal: number
  total: number
  deliveryPrice: number
  addCoffeeToCart: (item: CartItem) => void
  incrementItem?: (item: CartItem, quantity: number) => void
  decrementItem?: (item: CartItem, quantity: number) => void
}

const initialState = {
  id: String(new Date().getTime()),
  items: [],
  subtotal: 0,
  total: 0,
  deliveryPrice: 0,
}

export const CartContext = createContext({} as CreateContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(cartItemsReducer, initialState)

  const incrementItem = (item: CartItem, quantity: number) => {}

  const decrementItem = (item: CartItem, quantity: number) => {}

  const addCoffeeToCart = (item: CartItem) => {
    dispatch(addItemToCart(item))
  }
  console.log(cart)

  const deliveryPrice = 1
  const subtotal = 9
  const total = 10

  useEffect(() => {}, [])
  return (
    <CartContext.Provider
      value={{ deliveryPrice, cart, subtotal, total, addCoffeeToCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
