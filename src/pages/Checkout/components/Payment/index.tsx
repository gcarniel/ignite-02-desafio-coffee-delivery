import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { paymentTypes } from '../..'
import { Header } from '../Address/styles'
import { Button, ButtonsWrapper, PaymentContainer } from './styles'

interface PaymentProps {
  payment: paymentTypes
  onChangePayment: (payment: paymentTypes) => void
}

export function Payment({ payment, onChangePayment }: PaymentProps) {
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
        <Button
          onClick={() => onChangePayment('CREDIT')}
          selected={payment === 'CREDIT'}
        >
          <CreditCard size={16} />
          CARTÃO DE CRÉDITO
        </Button>

        <Button
          onClick={() => onChangePayment('DEBIT')}
          selected={payment === 'DEBIT'}
        >
          <Money size={16} />
          CARTÃO DE DÉBITO
        </Button>

        <Button
          onClick={() => onChangePayment('MONEY')}
          selected={payment === 'MONEY'}
        >
          <Bank size={16} />
          DINHEIRO
        </Button>
      </ButtonsWrapper>
    </PaymentContainer>
  )
}
