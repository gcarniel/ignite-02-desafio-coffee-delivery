import { Cart, CartQuantityItem, City, HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import { useAddress } from '../../hooks/useAddress'

export function Header() {
  const { cart } = useCart()
  const { address } = useAddress()

  const quantityItems = cart.items.reduce((acc, cur) => acc + cur.quantity, 0)
  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img style={{ height: 40 }} src={logo} alt="" />
      </NavLink>

      <nav style={{ display: 'flex' }}>
        <City>
          <MapPin weight="fill" size={22} />
          {address?.city && <span>{`${address.city}, ${address.state}`}</span>}
        </City>
        <NavLink to={'/checkout'}>
          <Cart>
            <CartQuantityItem>{quantityItems}</CartQuantityItem>
            <ShoppingCart weight="fill" size={22} />
          </Cart>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
