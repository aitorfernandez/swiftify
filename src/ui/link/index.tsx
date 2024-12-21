import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

interface LinkProps {
  children: React.ReactNode
  href?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLDivElement>
  rel?: string
  target?: string
  to?: string
}

export function Link({ to, href, ...props }: LinkProps): JSX.Element {
  if (to && href) {
    console.warn(
      'Link component should not have both "to" and "href" props. Defaulting to "to".'
    )
  }

  if (to) {
    return <StyledNavLink {...{ to, ...props }} />
  }
  return <StyledAnchor {...{ href, ...props }} />
}

const styles = css`
  text-decoration: underline;
  color: inherit;
`

const StyledAnchor = styled.a`
  ${styles}
`

const StyledNavLink = styled(NavLink)<LinkProps>`
  ${styles}
`
