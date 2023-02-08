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
import { useCart } from '../../../../hooks/useCart'
import { CartItem } from '../../../../Interfaces/CartItem'
import { paymentTypes } from '../..'

interface ResumeProps {
  payment: paymentTypes
}

export function Resume({ payment }: ResumeProps) {
  const { cart, increaseItem, decreaseItem, removeCoffeeFromCart } = useCart()

  const increaseQuantity = (id: string) => {
    increaseItem(id)
  }

  const decreaseQuantity = (id: string) => {
    decreaseItem(id)
  }

  const removeItem = (item: CartItem) => {
    removeCoffeeFromCart(item)
  }

  const data = cart.items.map((item) => {
    const itemDetails = items.find((d) => d.id === item.id)
    return {
      ...itemDetails,
      ...item,
    }
  })

  return (
    <ResumeContainer>
      <Title>Cafés selecionados</Title>
      <CartResume>
        <ItemWrapper>
          {data?.map((item) => {
            return (
              <Item key={item.id}>
                <img src={item.image} width={64} alt="" />
                <ItemDetails>
                  <ItemInformation>
                    <span>{item.name}</span>
                    <span>R$ {item.price.toFixed(2).replace('.', ',')}</span>
                  </ItemInformation>
                  <ItemActions>
                    <span>
                      <Quantity
                        quantity={item.quantity}
                        decrementQuantity={() => decreaseQuantity(item.id)}
                        incrementQuantity={() => increaseQuantity(item.id)}
                      />
                    </span>
                    <Button
                      color="base-text"
                      bgColor="base-button"
                      hoverColor="base-hover"
                      onClick={() => removeItem(item)}
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

        <Totals payment={payment} />
      </CartResume>
    </ResumeContainer>
  )
}
