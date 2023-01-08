import { CurrencyDollar } from 'phosphor-react'
import { Header } from '../Address/styles'
import { PaymentContainer } from './styles'

export function Payment() {
  return (
    <PaymentContainer>
      <Header>
        <div>
          <CurrencyDollar size={22} color="#4B2995" />
        </div>
        <div>
          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </Header>
    </PaymentContainer>
  )
}
