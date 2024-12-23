import { PageLayout } from '../../PageLayout'
import { Heading } from '../../ui'

export function HomePage(): JSX.Element {
  return (
    <PageLayout>
      <Heading level={2}>User</Heading>
      <div>
        <div>Card1</div>
        <div>Card2</div>
      </div>
      <div>Transactions</div>
    </PageLayout>
  )
}
