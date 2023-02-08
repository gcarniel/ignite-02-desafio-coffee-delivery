import { useContext } from 'react'
import { AddressContext } from '../contexts/Address'

export function useAddress() {
  const props = useContext(AddressContext)

  return { ...props }
}
