import type { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  c?: string
  ff?: string
}

export const Box = styled.div<BoxProps>`
  ${({ c, ff }) => css`
    color: ${c};
    font-family: ${ff};
  `}
`

Box.defaultProps = {
  c: 'inherit',
  ff: 'inherit',
}
