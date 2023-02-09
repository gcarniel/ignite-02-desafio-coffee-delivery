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
import { useAddress } from '../../hooks/useAddress'
import { usePayment } from '../../hooks/usePayment'

export function PageSuccess() {
  const { address } = useAddress()
  const { payment } = usePayment()

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
                  Entrega em{' '}
                  <Address>{`${address.street}, ${address.number}`}</Address>
                  <br></br>
                  {`${address.district} - ${address.city}, ${address.state}`}
                </div>
              </BadgeWrapper>

              <BadgeWrapper>
                <Badge badgeColor="yellow-medium">
                  <Timer weight="fill" size={32} />
                </Badge>
                <Item>
                  <span>Previsão de entrega</span>
                  <span>20m - 30m</span>
                </Item>
              </BadgeWrapper>

              <BadgeWrapper>
                <Badge badgeColor="yellow-dark">
                  <CurrencyDollar weight="fill" size={32} />
                </Badge>
                <Item>
                  <span>Pagamento na entrega</span>
                  <span>{payment.label}</span>
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
