import styled from 'styled-components'

import { Flex, Heading, Card } from '../../ui'
import { PageLayout } from '../../layouts/page-layout'
import { Transactions } from '../../components/transactions'

export function HomePage(): JSX.Element {
  return (
    <PageLayout>
      <Heading level={2}>User</Heading>
      <Wrapper>
        <Card>Card1</Card>
        <Card>Card2</Card>
      </Wrapper>
      <div>
        <Transactions />
      </div>
    </PageLayout>
  )
}

const Wrapper = styled(Flex)`
  flex-direction: row;
`
