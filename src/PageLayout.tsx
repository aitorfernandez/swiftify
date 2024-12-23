import styled from 'styled-components'

import { Box } from './ui'

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps): JSX.Element {
  return <StyleBox>{children}</StyleBox>
}

const StyleBox = styled(Box)`
  height: 100%;
`
