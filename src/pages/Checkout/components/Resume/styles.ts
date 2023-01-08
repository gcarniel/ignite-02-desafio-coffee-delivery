import styled from 'styled-components'

export const WrapperColumn = styled.section`
  display: flex;
  flex-direction: column;

  gap: 0.875rem;
`

export const ResumeContainer = styled(WrapperColumn)`
  flex: 1;
`

export const CartResume = styled.section`
  min-height: 498px;
  border-radius: 6px 44px;
  background-color: ${(props) => props.theme['base-card']};
`
