import styled from 'styled-components'

export const HomeContainer = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ProductList = styled.main`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
`
