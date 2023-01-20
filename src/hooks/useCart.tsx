import { useContext } from 'react'
import { CartContext } from '../contexts/Cart'

export function useCart() {
  const props = useContext(CartContext)

  return {
    ...props,
  }
}
