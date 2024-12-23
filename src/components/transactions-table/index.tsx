import styled from 'styled-components'

import { theme } from '../../theme'
import { TransactionsItem } from '../transactions-item'
import type { OnRampTransaction } from '../transactions'

interface TransactionsTableProps {
  transactions: OnRampTransaction[]
}

export function TransactionsTable({
  transactions,
}: TransactionsTableProps): JSX.Element {
  return (
    <Wrapper>
      <StyledTable>
        <thead>
          <tr>
            <TableHeader>Type</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Date</TableHeader>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ id, ...tx }) => (
            <TableRow key={id}>
              <TransactionsItem {...tx} />
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 8px;
  margin-top: 12px;
`

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
`

const TableHeader = styled.th`
  border-bottom: 1px solid ${theme.color.white[0]};
  color: ${theme.color.white[1]};
  font-size: ${theme.fontSize[2]};
  font-weight: ${theme.fontWeight.bold};
  padding: 12px 0;
  text-transform: capitalize;
`

const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid ${theme.color.white[0]};
  }
`
