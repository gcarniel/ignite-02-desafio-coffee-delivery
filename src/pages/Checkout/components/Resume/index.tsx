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

export function Resume() {
  const data = items.slice(1, 3)
  return (
    <ResumeContainer>
      <Title>Cafés selecionados</Title>
      <CartResume>
        <ItemWrapper>
          {data.map((d) => {
            return (
              <Item>
                <img src={d.image} width={64} alt="" />
                <ItemDetails>
                  <ItemInformation>
                    <span>{d.name}</span>
                    <span>R$ {d.price.toFixed(2).replace('.', ',')}</span>
                  </ItemInformation>
                  <ItemActions>
                    <span>
                      <Quantity />
                    </span>
                    <Button>
                      <Trash size={16} />
                      Remover
                    </Button>
                  </ItemActions>
                </ItemDetails>
              </Item>
            )
          })}
        </ItemWrapper>
      </CartResume>
    </ResumeContainer>
  )
}
