import { useRoutes } from 'react-router-dom'

import { AppLayout } from './layouts/app-layout'

import { HomePage } from './pages/home-page'

export function Routes() {
  const routes = useRoutes([
    {
      element: <AppLayout />,
      path: '/',
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
  ])
  return routes
}
