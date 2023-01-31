import styled from 'styled-components'

export const WrapperColumn = styled.section`
  display: flex;
  flex-direction: column;

  gap: 0.875rem;
`

export const ResumeContainer = styled(WrapperColumn)`
  font-family: 'Roboto';
  font-size: 1rem;
`

export const CartResume = styled.section`
  min-height: 498px;
  border-radius: 6px 44px;
  background-color: ${(props) => props.theme['base-card']};
`
export const ItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem 2.5rem;
  min-width: 400px;
`

export const Item = styled.li`
  display: flex;
  width: 23rem;

  img {
    margin-right: 1.25rem;
  }

  padding: 1.5rem 0;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  div + div {
    display: flex;
    align-items: center;
  }
`

export const ItemDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const ItemInformation = styled.div`
  display: flex;
  justify-content: space-between;

  flex: 1;
  span {
    color: ${(props) => props.theme['base-subtitle']};
  }

  span + span {
    font-weight: 700;
  }
`

export const ItemActions = styled.div`
  span > div {
    height: 2rem;
    font-size: 1rem;
  }
`

const BUTTONS_COLORS = {
  'yellow-medium': 'yellow-medium',
  'yellow-dark': 'yellow-dark',
  'purple-medium': 'purple-medium',
  'base-button': 'base-button',
  'base-text': 'base-text',
  'base-hover': 'base-hover',
  'base-white': 'base-white',
} as const

interface ButtonsProps {
  color: keyof typeof BUTTONS_COLORS
  bgColor: keyof typeof BUTTONS_COLORS
  hoverColor: keyof typeof BUTTONS_COLORS
}

export const Button = styled.button<ButtonsProps>`
  display: flex;
  align-items: center;

  height: 2rem;

  text-transform: uppercase;

  border-radius: 6px;
  padding: 1rem;

  font-size: 0.75rem;
  cursor: pointer;
  transition: all ease 0.2s;
  outline: 0;
  border: 0;

  color: ${(props) => props.theme[BUTTONS_COLORS[props.color]]};
  background-color: ${(props) => props.theme[BUTTONS_COLORS[props.bgColor]]};

  &:hover {
    background-color: ${(props) =>
      props.theme[BUTTONS_COLORS[props.hoverColor]]};
  }

  &:focus,
  &:active {
    box-shadow: none;
  }

  svg {
    margin-right: 0.5rem;
    color: ${(props) => props.theme['purple-medium']};
  }
`
