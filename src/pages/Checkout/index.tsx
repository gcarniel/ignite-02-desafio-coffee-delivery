import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  Address,
  CartResume,
  CheckoutContainer,
  FormContainer,
  Payment,
  ResumeContainer,
  Title,
  Input,
  Header,
  InputWrapper,
} from './styles'

export function PageCheckout() {
  return (
    <CheckoutContainer>
      <FormContainer>
        <Title>Complete seu pedido</Title>
        <Address>
          <Header>
            <div>
              <MapPinLine size={22} color="#C47F17" />
            </div>
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Header>

          <form onSubmit={() => {}}>
            <Input type="text" placeholder="CEP" width={12.5} />
            <Input type="text" placeholder="Rua" />
            <InputWrapper>
              <Input type="text" placeholder="Número" width={12.5} />
              <Input type="text" placeholder="Complemento" />
            </InputWrapper>
            <InputWrapper>
              <Input type="text" placeholder="Bairro" width={12.5} />
              <Input type="text" placeholder="Cidade" />
              <Input type="text" placeholder="UF" width={3.75} />
            </InputWrapper>
          </form>
        </Address>
        <Payment>
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
        </Payment>
      </FormContainer>

      <ResumeContainer>
        <Title>Cafés selecionados</Title>
        <CartResume>Resumo</CartResume>
      </ResumeContainer>
    </CheckoutContainer>
  )
}
