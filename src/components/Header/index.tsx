import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img style={{ height: 40 }} src={logo} alt="" />
      <div>
        <span>cidade</span>
        <span>carrinho</span>
      </div>
    </HeaderContainer>
  )
}
