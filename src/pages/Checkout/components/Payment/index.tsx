import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { paymentTypes } from '../..'
import { usePayment } from '../../../../hooks/usePayment'
import { Header } from '../Address/styles'
import { Button, ButtonsWrapper, PaymentContainer } from './styles'

export function Payment() {
  const { payment, handleChangePayment } = usePayment()

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
          onClick={() => handleChangePayment('CREDIT')}
          selected={payment.key === 'CREDIT'}
        >
          <CreditCard size={16} />
          CARTÃO DE CRÉDITO
        </Button>

        <Button
          onClick={() => handleChangePayment('DEBIT')}
          selected={payment.key === 'DEBIT'}
        >
          <Money size={16} />
          CARTÃO DE DÉBITO
        </Button>

        <Button
          onClick={() => handleChangePayment('MONEY')}
          selected={payment.key === 'MONEY'}
        >
          <Bank size={16} />
          DINHEIRO
        </Button>
      </ButtonsWrapper>
    </PaymentContainer>
  )
}
