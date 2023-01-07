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
