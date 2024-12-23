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
      <td>{type}</td>
      <td>{amount}</td>
      <td>{status}</td>
      <td>{date}</td>
    </>
  )
}
