import styled from 'styled-components'

export const WrapperGroup = styled.section`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
`

export const AddressContainer = styled(WrapperGroup)`
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const Header = styled.header`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
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
