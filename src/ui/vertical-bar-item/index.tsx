import styled from 'styled-components'

import { Box, type BoxProps } from '../box'
import { Link } from '../link'
import { Icon, type IconProps } from '../icon'

export interface VerticalBarItemProps {
  active?: boolean
  boxProps?: BoxProps
  iconProps: IconProps
  text: string
  to: string
}

export function VerticalBarItem({
  active,
  boxProps,
  iconProps,
  text,
  to,
}: VerticalBarItemProps) {
  return (
    <StyledLink {...{ to }}>
      <Icon {...iconProps} />
      <Box {...boxProps}>{text}</Box>
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  align-items: center;
  display: flex;
  text-decoration: none;

  i:first-child {
    margin-right: 8px;
  }
`
