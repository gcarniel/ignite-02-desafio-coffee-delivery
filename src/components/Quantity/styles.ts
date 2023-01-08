import styled from 'styled-components'

export const Actions = styled.button`
  color: ${(props) => props.theme['purple-medium']};
  outline: 0;
  border: 0;

  background-color: transparent;
  cursor: pointer;

  padding: 0.5rem;
  border-radius: 6px;

  transition: all ease-in-out 0.3s;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const QuantityContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  border-radius: 6px;
  font-size: 1.5rem;
  height: 2.375rem;
  margin-right: 0.5rem;

  background-color: ${(props) => props.theme['base-button']};
`
