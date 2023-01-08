import { Address } from './components/Address'
import { Payment } from './components/Payment'
import {
  CartResume,
  CheckoutContainer,
  FormContainer,
  ResumeContainer,
  Title,
} from './styles'

export function PageCheckout() {
  return (
    <CheckoutContainer>
      <FormContainer>
        <Title>Complete seu pedido</Title>
        <Address />
        <Payment />
      </FormContainer>

      <ResumeContainer>
        <Title>Cafés selecionados</Title>
        <CartResume>Resumo</CartResume>
      </ResumeContainer>
    </CheckoutContainer>
  )
}
