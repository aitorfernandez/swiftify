import type { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  c?: string
  ff?: string
}

export const Box = styled.div<BoxProps>`
  ${({ c = 'inherit', ff = 'inherit' }) => css`
    color: ${c};
    font-family: ${ff};
  `}
`
