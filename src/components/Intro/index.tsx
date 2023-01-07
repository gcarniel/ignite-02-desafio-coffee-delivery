import {
  Badge,
  BadgeContainer,
  BadgeWrapper,
  DescriptionWrapper,
  ImageWrapper,
  IntroContainer,
} from './styles'
import coffee from '../../assets/coffee.svg'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function Intro() {
  return (
    <IntroContainer>
      <DescriptionWrapper>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: '4.125rem',
          }}
        >
          <BadgeContainer>
            <BadgeWrapper>
              <Badge badgeColor="yellow-dark">
                <ShoppingCart weight="fill" size={32} />
              </Badge>
              <span>Compra simples e segura</span>
            </BadgeWrapper>

            <BadgeWrapper>
              <Badge badgeColor="yellow-medium">
                <Timer weight="fill" size={32} />
              </Badge>
              <span>Entrega rápida e rastreada</span>
            </BadgeWrapper>
          </BadgeContainer>

          <BadgeContainer>
            <BadgeWrapper>
              <Badge badgeColor="base-text">
                <Package weight="fill" size={32} />
              </Badge>
              <span>Embalagem mantém o café intacto</span>
            </BadgeWrapper>

            <BadgeWrapper>
              <Badge badgeColor="purple-medium">
                <Coffee weight="fill" size={32} />
              </Badge>
              <span>O café chega fresquinho até você</span>
            </BadgeWrapper>
          </BadgeContainer>
        </div>
      </DescriptionWrapper>
      <ImageWrapper>
        <img src={coffee} alt="" />
      </ImageWrapper>
    </IntroContainer>
  )
}
