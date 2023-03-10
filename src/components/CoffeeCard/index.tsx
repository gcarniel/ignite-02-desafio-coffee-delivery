import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { Quantity } from '../Quantity'
import { moneyFormat } from '../../helpers/format-money'
import {
  ButtonCart,
  CoffeeCardContainer,
  Description,
  Name,
  Price,
  SaleContainer,
  Types,
} from './styles'

interface CoffeeCardProps {
  id: string
  name: string
  image: string
  types: string[]
  description: string
  price: number
}

export function CoffeeCard({
  id,
  name,
  image,
  types,
  description,
  price,
}: CoffeeCardProps) {
  const { addCoffeeToCart, cart } = useCart()
  const [quantity, setQuantity] = useState(() => {
    const founded = cart.items.find((item) => item.id === id)

    return founded ? founded.quantity : 0
  })

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }
  const decrementQuantity = () => {
    setQuantity((prev) => {
      if (prev === 0) return 0
      return prev - 1
    })
  }

  const handleAddItem = () => {
    if (quantity <= 0) return

    addCoffeeToCart({
      id,
      name,
      price,
      quantity,
    })
  }

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
          <Price>{moneyFormat(price)}</Price>
        </div>
        <Quantity
          quantity={quantity}
          decrementQuantity={decrementQuantity}
          incrementQuantity={incrementQuantity}
        />
        <div>
          <ButtonCart onClick={handleAddItem}>
            <ShoppingCart weight="fill" color="white" size={22} />
          </ButtonCart>
        </div>
      </SaleContainer>
    </CoffeeCardContainer>
  )
}
