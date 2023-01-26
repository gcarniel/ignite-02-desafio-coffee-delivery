import { Cart, CartQuantityItem, City, HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cart } = useCart()
  const quantityItems = cart.items.reduce((acc, cur) => acc + cur.quantity, 0)
  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img style={{ height: 40 }} src={logo} alt="" />
      </NavLink>

      <nav style={{ display: 'flex' }}>
        <City>
          <MapPin weight="fill" size={22} />
          <span>Maringa, PR</span>
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
