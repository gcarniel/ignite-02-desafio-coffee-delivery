import styled from 'styled-components'
import { Actions } from '../Quantity/styles'

export const CoffeeCardContainer = styled.div`
  width: 256px;
  height: 310px;

  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme['base-card']};

  img {
    margin-top: -20px;
    width: 120px;
    height: 120px;
  }

  div {
    margin-top: 0.75rem;
  }
`

export const Types = styled.span`
  padding: 0.25rem 0.5rem;
  text-align: center;
  border-radius: 30px;

  margin-right: 0.25rem;

  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 1.3;

  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

export const Name = styled.div`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.3;

  color: ${(props) => props.theme['base-subtitle']};
`

export const SaleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Description = styled.div`
  padding: 0 1.25rem;
  text-align: center;
  font-size: 0.875rem;

  margin-bottom: 1rem;

  color: ${(props) => props.theme['base-label']};
`

export const Price = styled.span`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 1.5rem;
  margin-right: 1rem;
`

export const ButtonCart = styled(Actions)`
  border-radius: 10px;
  height: 2.375rem;
  background-color: ${(props) => props.theme['purple-dark']};

  &:hover {
    background-color: ${(props) => props.theme['purple-medium']};
  }
`
