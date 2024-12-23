import styled from 'styled-components'

import { Flex, Card } from '../../ui'
import { PageLayout } from '../../layouts/page-layout'
import { Transactions } from '../../components/transactions'

export function HomePage(): JSX.Element {
  return (
    <PageLayout>
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
  margin-bottom: 16px;
  width: 100%;

  & > * {
    width: 50%;
  }

  & > div:first-child {
    margin: 0 16px 0 0;
  }
`
