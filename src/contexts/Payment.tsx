import { createContext, ReactNode, useState } from 'react'

interface PaymentContextProviderProps {
  children: ReactNode
}

type Payment = {
  key: 'MONEY' | 'CREDIT' | 'DEBIT' | undefined
  label: string
}

const PaymentData: Payment[] = [
  { key: 'CREDIT', label: 'Cartão de Crédito' },
  { key: 'DEBIT', label: 'Cartão de Débito' },
  { key: 'MONEY', label: 'Dinheiro' },
]

interface PaymentContextProps {
  payment: Payment
  handleChangePayment: (paymentKey: string) => void
}

export const PaymentContext = createContext({} as PaymentContextProps)

export function PaymentContextProvider({
  children,
}: PaymentContextProviderProps) {
  const [payment, setPayment] = useState<Payment>({
    key: undefined,
    label: '',
  })

  const handleChangePayment = (paymentKey: string) => {
    if (paymentKey === payment.key) {
      setPayment({
        key: undefined,
        label: '',
      })
      return
    }

    const paymentSelected = PaymentData.find((pay) => pay.key === paymentKey)
    if (!paymentSelected) {
      setPayment({
        key: undefined,
        label: '',
      })
      return
    }
    setPayment(paymentSelected)
  }

  return (
    <PaymentContext.Provider value={{ payment, handleChangePayment }}>
      {children}
    </PaymentContext.Provider>
  )
}
