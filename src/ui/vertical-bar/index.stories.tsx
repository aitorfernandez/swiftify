import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import { VerticalBar, type VerticalBarItemPropsWithoutActive } from '.'

const meta = {
  title: 'ui/VerticalBar',
  component: VerticalBar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof VerticalBar>

export default meta
type Story = StoryObj<typeof meta>

const items: VerticalBarItemPropsWithoutActive[] = [
  {
    text: 'User',
    to: '/user',
    iconProps: {
      icon: ['fa', 'user'],
    },
  },
]

export const Default: Story = {
  render: (args) => <VerticalBar {...args} />,
  args: {
    items,
  },
}
