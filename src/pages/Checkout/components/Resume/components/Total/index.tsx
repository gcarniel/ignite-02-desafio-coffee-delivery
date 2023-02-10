import { useNavigate } from 'react-router-dom'
import { moneyFormat } from '../../../../../../helpers/format-money'
import { useAddress } from '../../../../../../hooks/useAddress'
import { useCart } from '../../../../../../hooks/useCart'
import { ButtonConfirm, TotalRow, TotalRowBold, TotalWrapper } from './styles'

import { toast } from 'react-toastify'
import { usePayment } from '../../../../../../hooks/usePayment'

export function Totals() {
  const { cart, deliveryPrice, subtotal, total } = useCart()
  const { isCompletedAddress } = useAddress()

  const navigate = useNavigate()
  const { payment } = usePayment()
  const { clearCart } = useCart()

  const isEmptyCart = cart.items.length === 0

  const handleConfirmOrder = () => {
    if (!isCompletedAddress) {
      toast.error('Há campos no endereço sem preencher!', {
        position: toast.POSITION.TOP_CENTER,
      })
      return
    }

    if (!payment.key) {
      toast.error('Informe um pagamento!', {
        position: toast.POSITION.TOP_CENTER,
      })
      return
    }

    clearCart()

    navigate('/success')
  }

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
            onClick={handleConfirmOrder}
          >
            Confirmar pedido
          </ButtonConfirm>
        </>
      )}
    </TotalWrapper>
  )
}
