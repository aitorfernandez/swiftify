import styled from 'styled-components'

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
      <table>
        <thead>
          <tr>
            <th>type</th>
            <th>amount</th>
            <th>status</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ id, ...tx }) => (
            <tr key={id}>
              <TransactionsItem {...tx} />
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
`
