import styled, { css } from 'styled-components'

import { Flex } from '../flex'

export interface CardProps {
  bg?: string
  radii?: string
}

export const Card = styled(Flex)<CardProps>`
  ${({ bg = 'none', radii = '0' }) => css`
    align-items: flex-start;
    background: ${bg};
    border-radius: ${radii};
    flex-direction: column;
  `}
`
