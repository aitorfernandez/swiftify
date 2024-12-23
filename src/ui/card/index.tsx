import styled, { css } from 'styled-components'

import { Flex } from '../flex'
import { theme } from '../../theme'

export interface CardProps {
  bg?: string
  radii?: string
}

export const Card = styled(Flex)<CardProps>`
  ${({ bg = theme.color.background[1], radii = theme.radii[2] }) => css`
    align-items: flex-start;
    background: ${bg};
    border-radius: ${radii};
    flex-direction: column;
    padding: 24px;
  `}
`
