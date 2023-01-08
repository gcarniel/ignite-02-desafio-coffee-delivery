import { Minus, Plus } from 'phosphor-react'
import { Actions, QuantityContainer } from './styles'

export function Quantity() {
  return (
    <QuantityContainer>
      <Actions>
        <Minus size={16} weight="bold" />
      </Actions>
      <span>1</span>
      <Actions>
        <Plus size={16} weight="bold" />
      </Actions>
    </QuantityContainer>
  )
}
