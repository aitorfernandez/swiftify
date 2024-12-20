import styled from 'styled-components'

import { Box, type BoxProps } from '../box'

const FlexBase = (props: BoxProps & { ref?: React.Ref<HTMLDivElement> }) => {
  return <Box {...props} />
}

export const Flex = styled(FlexBase)`
  display: flex;
`
