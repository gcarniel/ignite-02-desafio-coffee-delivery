import { MapPinLine } from 'phosphor-react'
import { useState } from 'react'
import { AddressContainer, Header, Input, InputWrapper } from './styles'

import { ChangeEvent } from 'react'

export function Address() {
  const [address, setAddress] = useState({
    zip: '',
    street: '',
    number: '',
    district: '',
    complement: '',
    city: '',
    state: '',
  })

  const isValidBRZip = (zipCode: any) => {
    const pattern = /^[0-9]{5}[0-9]{3}$/
    return pattern.test(zipCode)
  }

  const handleZipCode = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    console.log(e)

    // const isValidCaracter = /[0-9]/.test(value.at(-1)!)
    // if (!isValidCaracter) return

    if (value.length > 9) return

    setAddress({
      ...address,
      zip: value,
    })

    fetchAddreesByZip(value)
  }

  const fetchAddreesByZip = (zipCode: string) => {
    const result = isValidBRZip(zipCode)

    console.log(result)

    if (!result) return

    console.log(`${zipCode.slice(0, 5)}-${zipCode.slice(5, 8)}`)

    fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
      .then((res) => res.json())
      .then((data: any) => {
        console.log(data)
        setAddress({
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
    setAddress({
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
            setAddress({ ...address, zip: e.target.value.replace('-', '') })
          }
          onBlur={(e) => {
            if (e.target.value.length === 8) {
              setAddress({
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
