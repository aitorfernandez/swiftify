import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { AppStyle } from './AppStyle'
import { theme } from './theme'
import { Header } from './components/header'

export function AppLayout(): JSX.Element {
  return (
    <ThemeProvider {...{ theme }}>
      <AppStyle />
      <div>
        <div>
          <Header />
        </div>
      </div>
      <Outlet />
    </ThemeProvider>
  )
}
