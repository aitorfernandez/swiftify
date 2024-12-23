import styled from 'styled-components'

import { Flex, Icon } from '../../ui'
import { theme } from '../../theme'

export function UserSettings(): JSX.Element {
  return (
    <Wrapper>
      <Icon c={theme.color.primary[0]} icon={['fa', 'user']} />
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  align-items: center;
  background-color: ${theme.color.background[1]};
  border-radius: ${theme.radii[4]};
  height: 48px;
  justify-content: center;
  margin-bottom: 12px;
  padding: 12px;
  width: 48px;
`
