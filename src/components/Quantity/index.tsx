import { Minus, Plus } from 'phosphor-react'
import { Actions, QuantityContainer } from './styles'

interface QuantityProps {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}
export function Quantity({
  decrementQuantity,
  incrementQuantity,
  quantity,
}: QuantityProps) {
  return (
    <QuantityContainer>
      <Actions onClick={decrementQuantity}>
        <Minus size={16} weight="bold" />
      </Actions>
      <span>{quantity}</span>
      <Actions onClick={incrementQuantity}>
        <Plus size={16} weight="bold" />
      </Actions>
    </QuantityContainer>
  )
}
