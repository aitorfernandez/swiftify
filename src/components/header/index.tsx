import styled from 'styled-components'

import { theme } from '../../theme'
import { Heading } from '../../ui'

export function Header(): JSX.Element {
  return <StyledHeading level={2}>Swiftify</StyledHeading>
}

const StyledHeading = styled(Heading)`
  display: block;
  font-size: ${theme.fontSize[6]};
  font-weight: ${theme.fontWeight.bold};
  padding: 0 0 12px;
`
