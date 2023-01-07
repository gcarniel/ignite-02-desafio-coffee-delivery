import styled from 'styled-components'

export const HomeContainer = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
