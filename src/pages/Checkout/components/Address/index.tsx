import { MapPinLine } from 'phosphor-react'
import { AddressContainer, Header, Input, InputWrapper } from './styles'

export function Address() {
  return (
    <AddressContainer>
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
    </AddressContainer>
  )
}
