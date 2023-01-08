import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  margin-top: 2.5rem;
  display: flex;
  gap: 2rem;
`

const WrapperColumn = styled.section`
  display: flex;
  flex-direction: column;

  gap: 0.875rem;
`

export const FormContainer = styled(WrapperColumn)`
  width: 40rem;
`

export const ResumeContainer = styled(WrapperColumn)`
  flex: 1;
`

export const CartResume = styled.section`
  background-color: ${(props) => props.theme['base-card']};
`

export const Title = styled.h2`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3;
`
