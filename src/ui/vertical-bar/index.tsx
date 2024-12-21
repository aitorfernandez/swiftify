import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

import { Flex } from '../flex'
import { List } from '../list'

import {
  VerticalBarItem,
  type VerticalBarItemProps,
} from '../vertical-bar-item'

export type VerticalBarItemPropsWithoutActive = Omit<
  VerticalBarItemProps,
  'active'
>

export interface VerticalBarProps {
  items: VerticalBarItemPropsWithoutActive[]
}

export function VerticalBar({ items }: VerticalBarProps): JSX.Element {
  const location = useLocation()

  function match(str: string) {
    return str === location.pathname.substring(0, str.length)
  }

  return (
    <StyledFlex>
      <List>
        {items.map((item, k) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <li key={k}>
            <VerticalBarItem
              {...{
                active: match(item.to),
                ...item,
              }}
            />
          </li>
        ))}
      </List>
    </StyledFlex>
  )
}

const StyledFlex = styled(Flex)``
