import { moneyFormat } from '../../../../../../helpers/format-money'
import { useCart } from '../../../../../../hooks/useCart'
import { ButtonConfirm, TotalRow, TotalRowBold, TotalWrapper } from './styles'

export function Totals() {
  const { cart, deliveryPrice, subtotal, total } = useCart()

  const isEmptyCart = cart.items.length === 0

  return (
    <TotalWrapper>
      {isEmptyCart ? (
        <div>
          Seu carrinho está vazio... <a href="/">Ir às compras</a>
        </div>
      ) : (
        <>
          <div>
            <TotalRow>
              <span>Total de itens</span>
              <span>R$ {moneyFormat(subtotal)}</span>
            </TotalRow>
            <TotalRow>
              <span>Entrega</span>
              <span>R$ {moneyFormat(deliveryPrice)}</span>
            </TotalRow>
            <TotalRowBold>
              <span>Total</span>
              <span>R$ {moneyFormat(total)}</span>
            </TotalRowBold>
          </div>

          <ButtonConfirm
            bgColor="yellow-medium"
            color="base-white"
            hoverColor="yellow-dark"
          >
            Confirmar pedido
          </ButtonConfirm>
        </>
      )}
    </TotalWrapper>
  )
}
