import { useState } from 'react'
import { Address } from './components/Address'
import { Payment } from './components/Payment'
import { Resume } from './components/Resume'
import { CheckoutContainer, FormContainer, Title } from './styles'

export type paymentTypes = 'MONEY' | 'CREDIT' | 'DEBIT' | undefined

export function PageCheckout() {
  const [payment, setPayment] = useState<paymentTypes>(undefined)

  const handleChangePayment = (pay: paymentTypes) => {
    if (pay === payment) {
      setPayment(undefined)
      return
    }
    setPayment(pay)
  }
  return (
    <CheckoutContainer>
      <FormContainer>
        <Title>Complete seu pedido</Title>
        <Address />
        <Payment payment={payment} onChangePayment={handleChangePayment} />
      </FormContainer>
      <Resume payment={payment} />
    </CheckoutContainer>
  )
}
