import styled from 'styled-components'
import { Button, ItemWrapper } from '../../styles'

export const TotalWrapper = styled(ItemWrapper)``

export const ButtonConfirm = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2.875rem;
  margin: 1.5rem 0;
`

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`

export const TotalRowBold = styled(TotalRow)`
  font-weight: 700;
  font-size: 1.25rem;
`
