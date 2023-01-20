import { CoffeeCard } from '../../components/CoffeeCard'
import { Intro } from '../../components/Intro'

import { items } from '../../data/items'
import { useCart } from '../../hooks/useCart'
import { HomeContainer, ProductList } from './styles'

export function PageHome() {
  const { total } = useCart()

  console.log(total)
  return (
    <HomeContainer>
      <Intro />
      <h1>Nossos Cafés</h1>

      <ProductList>
        {items.map((item) => {
          return <CoffeeCard key={item.id} {...item} />
        })}
      </ProductList>
    </HomeContainer>
  )
}
