import styled, { css } from 'styled-components'

import { theme } from '../../theme'
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
    <Wrapper {...{ active }}>
      <StyledLink {...{ to, active }}>
        <Icon {...iconProps} />
        <Box {...boxProps}>{text}</Box>
      </StyledLink>
    </Wrapper>
  )
}

const Wrapper = styled(Box)<{ active?: boolean }>`
  padding: 12px 48px 12px 12px;
  margin: 6px 0;

  ${({ active }) =>
    active &&
    css`
      background-color: ${theme.color.background[1]};
      border-radius: 12px;
    `}
`

const StyledLink = styled(Link)<{ active?: boolean }>`
  ${({ active }) => css`
    align-items: center;
    display: flex;
    text-decoration: none;
    color: ${active ? theme.color.primary[0] : 'inherit'};

    i:first-child {
      margin-right: 8px;
    }
  `}
`
