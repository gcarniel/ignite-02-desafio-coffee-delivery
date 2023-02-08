import styled from 'styled-components'

import { WrapperGroup } from '../Address/styles'

export const PaymentContainer = styled(WrapperGroup)``

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
interface ButtonProps {
  selected: boolean
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;

  border-radius: 6px;
  padding: 1rem 0.5rem;

  width: 156px;

  font-size: 0.75rem;
  cursor: pointer;
  transition: all ease 0.2s;
  outline: 0;
  border: 0;

  background-color: ${(props) => props.theme['base-button']};

  &:hover {
    background-color: ${(props) =>
      props.selected ? '' : props.theme['base-hover']};
  }

  outline: ${(props) =>
    props.selected ? `1px solid ${props.theme['purple-dark']}` : ''};
  color: ${(props) => (props.selected ? props.theme['purple-dark'] : '')};
  background-color: ${(props) =>
    props.selected ? props.theme['purple-light'] : ''};

  &:focus,
  &:active {
    box-shadow: none;
  }

  svg {
    margin-right: 0.5rem;
    color: ${(props) => props.theme['purple-medium']};
  }
`
