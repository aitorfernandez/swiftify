import styled from 'styled-components'

import { theme } from '../../theme'
import type { OnRampTransaction } from '../transactions'

export type OnRampTransactionWithoutId = Omit<OnRampTransaction, 'id'>

export function TransactionsItem({
  type,
  amount,
  status,
  date,
}: OnRampTransactionWithoutId) {
  return (
    <>
      <TableCell>{type}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell>{date}</TableCell>
    </>
  )
}

const TableCell = styled.td`
  color: ${theme.color.white[3]};
  font-size: ${theme.fontSize[2]};
  padding: 12px 0;
`
