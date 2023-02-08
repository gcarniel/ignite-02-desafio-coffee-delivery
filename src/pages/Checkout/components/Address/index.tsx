import { MapPinLine } from 'phosphor-react'
import { useState } from 'react'
import { AddressContainer, Header, Input, InputWrapper } from './styles'

import { ChangeEvent } from 'react'
import { useAddress } from '../../../../hooks/useAddress'

export function Address() {
  const { address, handleAddress } = useAddress()

  const validNumberZip = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

  const isValidBRZip = (zipCode: any) => {
    const pattern = /^[0-9]{5}[0-9]{3}$/
    return pattern.test(zipCode)
  }

  const handleZipCode = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    const isValidCaracter = validNumberZip.includes(value.at(-1)!)

    if (!isValidCaracter) return

    if (value.length > 8) return

    handleAddress({
      ...address,
      zip: value,
    })

    fetchAddreesByZip(value)
  }

  const fetchAddreesByZip = (zipCode: string) => {
    const result = isValidBRZip(zipCode)

    if (!result) return

    fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
      .then((res) => res.json())
      .then((data: any) => {
        handleAddress({
          zip: `${zipCode.slice(0, 5)}-${zipCode.slice(5, 8)}`,
          street: data.logradouro,
          number: '',
          district: data.bairro,
          complement: data.complemento,
          city: data.localidade,
          state: data.uf,
        })
      })
  }

  const handleInputValue = (
    e: ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    handleAddress({
      ...address,
      [field]: e.target.value,
    })
  }

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
        <Input
          type="text"
          placeholder="CEP"
          width={12.5}
          onChange={(e) => handleZipCode(e)}
          onFocus={(e) =>
            handleAddress({ ...address, zip: e.target.value.replace('-', '') })
          }
          onBlur={(e) => {
            if (e.target.value.length === 8) {
              handleAddress({
                ...address,
                zip: `${e.target.value.slice(0, 5)}-${e.target.value.slice(
                  5,
                  8,
                )}`,
              })
            }
          }}
          value={address.zip}
        />
        <Input
          type="text"
          placeholder="Rua"
          onChange={(e) => handleInputValue(e, 'street')}
          value={address.street}
        />
        <InputWrapper>
          <Input
            type="text"
            placeholder="Número"
            width={12.5}
            onChange={(e) => handleInputValue(e, 'number')}
            value={address.number}
          />
          <Input
            type="text"
            placeholder="Complemento"
            onChange={(e) => handleInputValue(e, 'complement')}
            value={address.complement}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Bairro"
            width={12.5}
            onChange={(e) => handleInputValue(e, 'district')}
            value={address.district}
          />
          <Input
            type="text"
            placeholder="Cidade"
            onChange={(e) => handleInputValue(e, 'city')}
            value={address.city}
          />
          <Input
            type="text"
            placeholder="UF"
            width={3.75}
            maxLength={2}
            onChange={(e) => handleInputValue(e, 'state')}
            value={address.state}
          />
        </InputWrapper>
      </form>
    </AddressContainer>
  )
}
