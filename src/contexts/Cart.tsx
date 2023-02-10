import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { Cart } from '../Interfaces/Cart'
import { CartItem } from '../Interfaces/CartItem'
import {
  addItemToCart,
  decreaseItemFromCart,
  increaseItemFromCart,
  removeItemFromCart,
  clearItemsFromCart,
} from '../reducers/cart/actions'
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
  removeCoffeeFromCart: (item: CartItem) => void
  increaseItem: (id: string) => void
  decreaseItem: (id: string) => void
  clearCart: () => void
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

  const increaseItem = (id: string) => {
    dispatch(increaseItemFromCart(id))
  }

  const decreaseItem = (id: string) => {
    dispatch(decreaseItemFromCart(id))
  }

  const addCoffeeToCart = (item: CartItem) => {
    dispatch(addItemToCart(item))
  }

  const removeCoffeeFromCart = (item: CartItem) => {
    dispatch(removeItemFromCart(item.id))
  }

  const clearCart = () => {
    dispatch(clearItemsFromCart())
  }

  useEffect(() => {}, [])
  return (
    <CartContext.Provider
      value={{
        deliveryPrice: cart.deliveryPrice,
        cart,
        subtotal: cart.subtotal,
        total: cart.total,
        addCoffeeToCart,
        removeCoffeeFromCart,
        increaseItem,
        decreaseItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
