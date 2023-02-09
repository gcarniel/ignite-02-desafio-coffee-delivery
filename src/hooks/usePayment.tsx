import { useContext } from 'react'
import { PaymentContext } from '../contexts/Payment'

export function usePayment() {
  const props = useContext(PaymentContext)

  return { ...props }
}
