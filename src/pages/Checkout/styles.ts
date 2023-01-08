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

const WrapperGroup = styled.section`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
`

export const FormContainer = styled(WrapperColumn)`
  width: 40rem;
`

export const Header = styled.header`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
`

export const Address = styled(WrapperGroup)`
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const Payment = styled(WrapperGroup)``

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

const BaseInput = styled.input`
  height: 2.5rem;
  border: 0;

  font-size: 0.875rem;
  padding: 0 0.75rem;

  border-radius: 4px;

  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-input']};

  &:focus {
    border-color: ${(props) => props.theme['yellow-dark']};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const Input = styled(BaseInput)`
  width: ${(props) => (props.width ? props.width + `rem` : '100%')};
`

export const InputWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`
