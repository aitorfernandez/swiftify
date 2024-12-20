import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { theme } from './theme'

export function AppLayout(): JSX.Element {
  return (
    <ThemeProvider {...{ theme }}>
      <Outlet />
    </ThemeProvider>
  )
}
