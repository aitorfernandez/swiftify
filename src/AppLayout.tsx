import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { AppStyle } from './AppStyle'
import { theme } from './theme'

export function AppLayout(): JSX.Element {
  return (
    <ThemeProvider {...{ theme }}>
      <AppStyle />
      <Outlet />
    </ThemeProvider>
  )
}
