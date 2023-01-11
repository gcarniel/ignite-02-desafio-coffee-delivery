import styled from 'styled-components'

export const SuccessContainer = styled.main`
  height: calc(100vh - 6.5rem);

  display: flex;
  margin-top: 5rem;
  justify-content: space-between;

  h1 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 2rem;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
  }

  section > svg {
    width: 492px;
    height: 293px;
  }
`

export const BorderWrapper = styled.div`
  width: 526px;
  height: 270px;

  position: relative;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme['yellow-light']},
    ${(props) => props.theme['purple-medium']}
  );
  padding: 1px;
  border-radius: 6px 36px;
`

export const SaleDetail = styled.div`
  height: 100%;
  padding: 2.5rem;

  border-radius: 5px 35px;

  background-color: ${(props) => props.theme['base-backgroud']};
  color: ${(props) => props.theme['base-text']};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
