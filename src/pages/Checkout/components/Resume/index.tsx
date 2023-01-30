import { Title } from '../../styles'
import {
  Button,
  CartResume,
  Item,
  ItemActions,
  ItemDetails,
  ItemInformation,
  ItemWrapper,
  ResumeContainer,
} from './styles'

import { items } from '../../../../data/items'
import { Quantity } from '../../../../components/Quantity'
import { Trash } from 'phosphor-react'
import { Totals } from './components/Total'
import { useState } from 'react'
import { useCart } from '../../../../hooks/useCart'

export function Resume() {
  const [quantity, setQuantity] = useState(0)
  const { cart } = useCart()

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }
  const decrementQuantity = () => {
    setQuantity((prev) => {
      if (prev === 0) return 0
      return prev - 1
    })
  }

  const data = cart.items.map((item) => {
    const itemDetails = items.find((d) => d.id === item.id)
    console.log({ itemDetails })
    return {
      ...itemDetails,
      ...item,
    }
  })

  console.log(data)
  return (
    <ResumeContainer>
      <Title>Cafés selecionados</Title>
      <CartResume>
        <ItemWrapper>
          {data.map((d) => {
            return (
              <Item key={d.id}>
                <img src={d.image} width={64} alt="" />
                <ItemDetails>
                  <ItemInformation>
                    <span>{d.name}</span>
                    <span>R$ {d.price.toFixed(2).replace('.', ',')}</span>
                  </ItemInformation>
                  <ItemActions>
                    <span>
                      <Quantity
                        quantity={d.quantity}
                        decrementQuantity={decrementQuantity}
                        incrementQuantity={incrementQuantity}
                      />
                    </span>
                    <Button
                      color="base-text"
                      bgColor="base-button"
                      hoverColor="base-hover"
                    >
                      <Trash size={16} />
                      Remover
                    </Button>
                  </ItemActions>
                </ItemDetails>
              </Item>
            )
          })}
        </ItemWrapper>

        <Totals />
      </CartResume>
    </ResumeContainer>
  )
}
