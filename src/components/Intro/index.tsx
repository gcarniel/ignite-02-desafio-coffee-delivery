import { DescriptionWrapper, ImageWrapper, IntroContainer } from './styles'
import coffee from '../../assets/coffee.svg'

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

        <div></div>
      </DescriptionWrapper>
      <ImageWrapper>
        <img src={coffee} alt="" />
      </ImageWrapper>
    </IntroContainer>
  )
}
