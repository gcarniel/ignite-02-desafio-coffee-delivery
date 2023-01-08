import { Cart, City, HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
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
            <ShoppingCart weight="fill" size={22} />
          </Cart>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
