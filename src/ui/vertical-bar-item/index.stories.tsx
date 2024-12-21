import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import { VerticalBarItem } from '.'

const meta = {
  title: 'ui/VerticalBarItem',
  component: VerticalBarItem,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof VerticalBarItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <VerticalBarItem {...args} />,
  args: {
    active: false,
    text: 'User',
    to: '/user',
    iconProps: {
      icon: ['fa', 'user'],
    },
  },
}
