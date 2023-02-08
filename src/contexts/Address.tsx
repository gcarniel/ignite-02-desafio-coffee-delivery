import { createContext, ReactNode, useEffect, useState } from 'react'
interface AddressContextProviderProps {
  children: ReactNode
}

interface AddressContextType {
  address: {
    zip: string
    street: string
    number: string
    district: string
    complement: string
    city: string
    state: string
  }
  handleAddress: (address: AddressType) => void
  isCompletedAddress: boolean
}

interface AddressType {
  zip: string
  street: string
  number: string
  district: string
  complement: string
  city: string
  state: string
}

export const AddressContext = createContext({} as AddressContextType) //TIRAR O ANY

export function AddressContextProvider({
  children,
}: AddressContextProviderProps) {
  const [address, setAddress] = useState<AddressType>({
    zip: '',
    street: '',
    number: '',
    district: '',
    complement: '',
    city: '',
    state: '',
  })

  const handleAddress = (newAddress: AddressType) => {
    const mergedAddress = { ...address, ...newAddress }
    setAddress(mergedAddress)
    localStorage.setItem(
      '@-coffee-delivery-address',
      JSON.stringify(mergedAddress),
    )
  }

  const isCompletedAddress = Object.values(address).every((field) => field)

  useEffect(() => {
    const addressLocal = localStorage.getItem('@-coffee-delivery-address')

    if (addressLocal) {
      setAddress(JSON.parse(addressLocal))
    }
  }, [])

  return (
    <AddressContext.Provider
      value={{ address, handleAddress, isCompletedAddress }}
    >
      {children}
    </AddressContext.Provider>
  )
}
