import React from 'react'
import styled, { css } from 'styled-components'

interface HeadingProps {
  children: React.ReactNode
  ff?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = styled(
  ({
    children,
    level = 1,
    ff = 'fontFamily.primary',
    ...props
  }: HeadingProps) => React.createElement(`h${level}`, props, children)
)`
  ${
    // biome-ignore lint/correctness/noEmptyPattern: <explanation>
    ({}) => css`
      letter-spacing: normal;
    `
  }
`
