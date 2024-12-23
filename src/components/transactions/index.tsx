import styled from 'styled-components'

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
      type: 'a',
      amount: 'a',
      status: 'a',
      date: 'a',
    },
    {
      id: 2,
      type: 'b',
      amount: 'b',
      status: 'b',
      date: 'b',
    },
    {
      id: 3,
      type: 'c',
      amount: 'c',
      status: 'c',
      date: 'c',
    },
    {
      id: 4,
      type: 'd',
      amount: 'd',
      status: 'd',
      date: 'd',
    },
  ]

  return (
    <Card>
      <Header>
        <Heading level={5}>Recent transactions</Heading>
      </Header>
      <TransactionsTable {...{ transactions }} />
    </Card>
  )
}

const Header = styled(Flex)``
