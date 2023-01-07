import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  Actions,
  ButtonCart,
  CoffeeCardContainer,
  Description,
  Name,
  Price,
  Quantity,
  SaleContainer,
  Types,
} from './styles'

interface CoffeeCardProps {
  id?: string
  name: string
  image: string
  types: string[]
  description: string
  price: number
}

export function CoffeeCard({
  name,
  image,
  types,
  description,
  price,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={image} alt="" />
      <div>
        {types.map((type) => {
          return <Types key={type}>{type}</Types>
        })}
      </div>
      <Name>{name}</Name>
      <Description>{description}</Description>

      <SaleContainer>
        <div>
          <span style={{ fontSize: '.75rem' }}> R$ </span>
          <Price>{price.toFixed(2).replace('.', ',')}</Price>
        </div>
        <Quantity>
          <Actions>
            <Minus size={16} weight="bold" />
          </Actions>
          <span>1</span>
          <Actions>
            <Plus size={16} weight="bold" />
          </Actions>
        </Quantity>
        <div>
          <ButtonCart>
            <ShoppingCart weight="fill" color="white" size={22} />
          </ButtonCart>
        </div>
      </SaleContainer>
    </CoffeeCardContainer>
  )
}
