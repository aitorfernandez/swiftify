import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, type IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faGauge,
  faDiamondTurnRight,
  faScroll,
} from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faGauge, faDiamondTurnRight, faScroll)

export interface IconProps {
  icon: string[]
  c?: string
  fs?: string
}

export function Icon({ icon, ...props }: IconProps): JSX.Element {
  return (
    <Wrapper {...props}>
      <FontAwesomeIcon {...{ icon: icon as IconProp }} />
    </Wrapper>
  )
}

const Wrapper = styled.i<{ c?: string; fs?: string }>`
  ${({ c = 'inherit', fs = 'inherit' }) => css`
    color: ${c};
    font-size: ${fs};
    margin: 0;
    padding: 0;
  `}
`
