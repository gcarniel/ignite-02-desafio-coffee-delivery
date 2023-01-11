import { BorderWrapper, SaleDetail, SuccessContainer } from './styles'

import illustration from '../../assets/illustration.svg'
import { Badge, BadgeWrapper } from '../../components/Intro/styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function PageSuccess() {
  return (
    <SuccessContainer>
      <section>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <BorderWrapper>
          <SaleDetail>
            <BadgeWrapper>
              <Badge badgeColor="purple-medium">
                <MapPin weight="fill" size={32} />
              </Badge>
              <div>
                Entrega em <span>xxxxxxxxxxxxxxxxxxxxxx</span>
              </div>
            </BadgeWrapper>

            <BadgeWrapper>
              <Badge badgeColor="yellow-medium">
                <Timer weight="fill" size={32} />
              </Badge>
              <div>Previsão de entrega</div>
              <div>xxxxxxxxxxxx</div>
            </BadgeWrapper>

            <BadgeWrapper>
              <Badge badgeColor="yellow-dark">
                <CurrencyDollar weight="fill" size={32} />
              </Badge>
              <div>Pagamento na entrega</div>
              <div>xxxxxxxxxxxx</div>
            </BadgeWrapper>
          </SaleDetail>
        </BorderWrapper>
      </section>

      <section>
        <img src={illustration} alt="" />
      </section>
    </SuccessContainer>
  )
}
