import styled from 'styled-components'

export const IntroContainer = styled.div`
  min-height: 34rem;

  display: flex;
  justify-content: space-between;

  padding-top: 5.875rem;
  margin-bottom: 6.75rem;
`

export const DescriptionWrapper = styled.div`
  div {
    line-height: 1.3;

    h1 {
      font-family: 'Baloo 2';
      font-size: 3rem;
      font-weight: 800;
      color: ${(props) => props.theme['base-title']};
      margin-bottom: 1rem;
    }

    p {
      font-family: 'Roboto';
      font-size: 1.25rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    height: 360px;
    width: 476px;
  }

  /* padding: 5.75rem 10rem; */
`
const BADGE_COLORS = {
  'yellow-dark': 'yellow-dark',
  'yellow-medium': 'yellow-medium',
  'purple-medium': 'purple-medium',
  'base-text': 'base-text',
} as const

interface BadgeProps {
  badgeColor: keyof typeof BADGE_COLORS
}

export const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
  flex: 1;
`

export const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Badge = styled.div<BadgeProps>`
  line-height: 1.3;
  height: 2rem;
  width: 2rem;

  svg {
    padding: 0.5rem;
    color: ${(props) => props.theme['base-white']};
    border-radius: 50%;
    background-color: ${(props) => props.theme[BADGE_COLORS[props.badgeColor]]};
  }
`
