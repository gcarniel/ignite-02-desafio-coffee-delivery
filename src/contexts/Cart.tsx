import { createContext, ReactNode, useEffect, useState } from 'react'
import { Items } from '../Interfaces/Items'

interface CartContextProviderProps {
  children: ReactNode
}

interface CreateContextType {
  items: Items[]
  subtotal: number
  total: number
  deliveryPrice: number
  addCoffeeToCart: (coffee: Items) => void
}

export const CartContext = createContext({} as CreateContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState<Items[]>([])

  const addCoffeeToCart = (coffee: Items) => {
    setItems((prev) => ({ ...prev, coffee }))
  }

  const deliveryPrice = 1
  const subtotal = 9
  const total = 10

  useEffect(() => {}, [])
  return (
    <CartContext.Provider
      value={{ deliveryPrice, items, subtotal, total, addCoffeeToCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
