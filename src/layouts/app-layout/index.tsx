import { Outlet } from 'react-router-dom'
import { ThemeProvider, styled } from 'styled-components'

import { AppStyle } from '../../AppStyle'
import { theme } from '../../theme'
import { Header } from '../../components/header'
import { Box, Flex, VerticalBar, type VerticalBarItemProps } from '../../ui'

export function AppLayout(): JSX.Element {
  const items: VerticalBarItemProps[] = [
    {
      iconProps: {
        icon: ['fa', 'gauge'],
      },
      text: 'dashboard',
      to: '/',
    },
    {
      iconProps: {
        icon: ['fa', 'diamond-turn-right'],
      },
      text: 'swap',
      to: '/',
    },
    {
      iconProps: {
        icon: ['fa', 'scroll'],
      },
      text: 'transactions',
      to: '/',
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
              <Bottom>User</Bottom>
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
  max-width: 1440px;
  position: relative;
`

const Inner = styled(Flex)`
  flex: 1 1 0%;
  height: 100%;
  position: relative;
`

const SidebarWrapper = styled.div`
  flex: none;
  position: relative;
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
