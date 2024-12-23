import { Outlet } from 'react-router-dom'
import { ThemeProvider, styled } from 'styled-components'

import { AppStyle } from '../../AppStyle'
import { Box, Flex, VerticalBar, type VerticalBarItemProps } from '../../ui'
import { Header } from '../../components/header'
import { UserSettings } from '../../components/user-settings'

import { theme } from '../../theme'

export function AppLayout(): JSX.Element {
  const items: VerticalBarItemProps[] = [
    {
      iconProps: {
        icon: ['fa', 'gauge'],
        c: theme.color.primary[0],
      },
      text: 'dashboard',
      to: '/',
    },
    {
      iconProps: {
        icon: ['fa', 'diamond-turn-right'],
        c: theme.color.primary[0],
      },
      text: 'swap',
      to: '/swap',
    },
    {
      iconProps: {
        icon: ['fa', 'scroll'],
        c: theme.color.primary[0],
      },
      text: 'transactions',
      to: '/transactions',
    },
  ]

  return (
    <ThemeProvider {...{ theme }}>
      <AppStyle />
      <Wrapper>
        <Inner>
          <SidebarWrapper>
            <Elements>
              <Top>
                <Header />
              </Top>
              <Middle>
                <Nav>
                  <VerticalBar {...{ items }} />
                </Nav>
              </Middle>
              <Bottom>
                <UserSettings />
              </Bottom>
            </Elements>
          </SidebarWrapper>
          <Main>
            <Outlet />
          </Main>
        </Inner>
      </Wrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled(Box)`
  height: 100%;
  margin: 0 auto;
  max-width: 960px;
  position: relative;
`

const Inner = styled(Flex)`
  flex: 1 1 0%;
  height: 100%;
  padding: 12px 0;
  position: relative;
`

const SidebarWrapper = styled.div`
  flex: none;
  position: relative;
  margin: 0 24px;
`

const Elements = styled(Flex)`
  flex-direction: column;
  height: 100%;
`

const Top = styled.div`
  flex: none;
`

const Middle = styled.div`
  flex: 1;
`

const Nav = styled(Flex).attrs({ as: 'nav' })`
  height: 100%;
  width: 100%;
`

const Bottom = styled.div`
  flex: none;
`

const Main = styled.main`
  flex: 1;
`
