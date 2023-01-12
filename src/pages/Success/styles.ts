import styled from 'styled-components'

export const SuccessContainer = styled.main`
  height: calc(100vh - 6.5rem);

  margin-top: 5rem;

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

  section > h1 {
    background-color: red;
  }

  section > img {
    max-width: 30.75rem;
  }
`

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BorderWrapper = styled.div`
  max-width: 32.87rem;
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

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  span + span {
    font-weight: 700;
  }
`

export const Address = styled.span`
  font-weight: 700;
`
