import { Address } from './components/Address'
import { Payment } from './components/Payment'
import { Resume } from './components/Resume'
import { CheckoutContainer, FormContainer, Title } from './styles'

export function PageCheckout() {
  return (
    <CheckoutContainer>
      <FormContainer>
        <Title>Complete seu pedido</Title>
        <Address />
        <Payment />
      </FormContainer>
      <Resume />
    </CheckoutContainer>
  )
}
