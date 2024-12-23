import styled from 'styled-components'

import { theme } from '../../theme'
import { Flex, Card, Heading } from '../../ui'
import { TransactionsTable } from '../transactions-table'

export interface OnRampTransaction {
  id: number
  type: string
  amount: string
  status: string
  date: string
}

export function Transactions(): JSX.Element {
  const transactions = [
    {
      id: 1,
      type: 'Deposit',
      amount: '$500.00',
      status: 'Completed',
      date: '2024-12-22 14:30:00',
    },
    {
      id: 2,
      type: 'Swap',
      amount: '$150.00',
      status: 'Pending',
      date: '2024-12-22 16:15:00',
    },
    {
      id: 3,
      type: 'Deposit',
      amount: '$2,000.00',
      status: 'Failed',
      date: '2024-12-21 10:45:00',
    },
    {
      id: 4,
      type: 'Swap',
      amount: '$350.00',
      status: 'Completed',
      date: '2024-12-20 09:00:00',
    },
  ]

  return (
    <Card>
      <Header>
        <StyledHeading level={5}>Recent transactions</StyledHeading>
      </Header>
      <TransactionsTable {...{ transactions }} />
    </Card>
  )
}

const Header = styled(Flex)``

const StyledHeading = styled(Heading)`
  display: block;
  font-size: ${theme.fontSize[4]};
  font-weight: ${theme.fontWeight.bold};
`
