import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;

  display: flex;

  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export const City = styled.div`
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;

  color: ${(props) => props.theme['purple-medium']};
  background-color: ${(props) => props.theme['purple-light']};

  span {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const Cart = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 6px;

  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: ${(props) => props.theme['yellow-light']};
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CartQuantityItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  position: absolute;
  right: -8.35px;
  top: -8px;
  border-radius: 50%;

  width: 20px;
  height: 20px;

  font-size: 0.75rem;
  text-align: center;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;

  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme['base-white']};
`
