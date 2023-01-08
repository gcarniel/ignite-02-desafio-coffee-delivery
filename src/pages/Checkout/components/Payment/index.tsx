import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { Header } from '../Address/styles'
import { Button, ButtonsWrapper, PaymentContainer } from './styles'

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
      <ButtonsWrapper>
        <Button>
          <CreditCard size={16} />
          CARTÃO DE CRÉDITO
        </Button>

        <Button>
          <Money size={16} />
          CARTÃO DE DÉBITO
        </Button>

        <Button>
          <Bank size={16} />
          DINHEIRO
        </Button>
      </ButtonsWrapper>
    </PaymentContainer>
  )
}
