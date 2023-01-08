import { Title } from '../../styles'
import { CartResume, ResumeContainer } from './styles'

import { items } from '../../../../data/items'
import { Quantity } from '../../../../components/Quantity'

export function Resume() {
  const data = items.slice(1, 3)
  return (
    <ResumeContainer>
      <Title>Cafés selecionados</Title>
      <CartResume>
        {data.map((d) => {
          return (
            <div style={{ display: 'flex' }}>
              <div>{d.name}</div>
              <img src={d.image} width={64} alt="" />
              <Quantity />
            </div>
          )
        })}
      </CartResume>
    </ResumeContainer>
  )
}
