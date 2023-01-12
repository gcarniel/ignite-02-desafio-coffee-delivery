import {
  Address,
  BorderWrapper,
  Details,
  Item,
  SaleDetail,
  SuccessContainer,
} from './styles'

import illustration from '../../assets/illustration.svg'
import { Badge, BadgeWrapper } from '../../components/Intro/styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function PageSuccess() {
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <Details>
        <section>
          <BorderWrapper>
            <SaleDetail>
              <BadgeWrapper>
                <Badge badgeColor="purple-medium">
                  <MapPin weight="fill" size={32} />
                </Badge>
                <div>
                  Entrega em <Address>xxxxxxxxxxxxxxxxxxxxxx</Address>
                </div>
              </BadgeWrapper>

              <BadgeWrapper>
                <Badge badgeColor="yellow-medium">
                  <Timer weight="fill" size={32} />
                </Badge>
                <Item>
                  <span>Previsão de entrega</span>
                  <span>xxxxxxxxxxxx</span>
                </Item>
              </BadgeWrapper>

              <BadgeWrapper>
                <Badge badgeColor="yellow-dark">
                  <CurrencyDollar weight="fill" size={32} />
                </Badge>
                <Item>
                  <span>Pagamento na entrega</span>
                  <span>xxxxxxxxxxxx</span>
                </Item>
              </BadgeWrapper>
            </SaleDetail>
          </BorderWrapper>
        </section>

        <section>
          <img src={illustration} alt="" />
        </section>
      </Details>
    </SuccessContainer>
  )
}
