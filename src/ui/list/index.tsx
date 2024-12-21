import styled, { css } from 'styled-components'

export interface ListProps
  extends React.HTMLAttributes<HTMLOListElement | HTMLUListElement> {
  children: React.ReactNode
  ordered?: boolean
}

export function List({ ordered, children, ...props }: ListProps) {
  if (ordered) {
    return (
      <StyledOl {...(props as React.HTMLAttributes<HTMLOListElement>)}>
        {children}
      </StyledOl>
    )
  }
  return (
    <StyledUl {...(props as React.HTMLAttributes<HTMLUListElement>)}>
      {children}
    </StyledUl>
  )
}

const styles = css`
  margin: 0;
  padding: 0;
`

const StyledOl = styled.ol`
  ${styles}
`

const StyledUl = styled.ul`
  ${styles}
`
