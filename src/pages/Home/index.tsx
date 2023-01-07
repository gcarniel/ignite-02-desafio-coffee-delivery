import { Intro } from '../../components/Intro'

import { items } from '../../data/items'
import { HomeContainer } from './styles'

export function PageHome() {
  return (
    <HomeContainer>
      <Intro />
      <h1>Nossos Cafés</h1>

      {items.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt="" />
            {item.types.map((type) => {
              return <span key={type}>{type}</span>
            })}
            <div>{item.description}</div>
          </div>
        )
      })}
    </HomeContainer>
  )
}
