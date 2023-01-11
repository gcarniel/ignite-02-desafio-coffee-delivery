import { ButtonConfirm, TotalRow, TotalRowBold, TotalWrapper } from './styles'

export function Totals() {
  return (
    <TotalWrapper>
      <div>
        <TotalRow>
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </TotalRow>
        <TotalRow>
          <span>Entrega</span>
          <span>R$ 3,70</span>
        </TotalRow>
        <TotalRowBold>
          <span>Total</span>
          <span>R$ 33,40</span>
        </TotalRowBold>
      </div>

      <ButtonConfirm
        bgColor="yellow-medium"
        color="base-white"
        hoverColor="yellow-dark"
      >
        Confirmar pedido
      </ButtonConfirm>
    </TotalWrapper>
  )
}
