import type { Meta, StoryObj } from '@storybook/react'

import { List } from '.'

const meta = {
  title: 'ui/List',
  component: List,
} satisfies Meta<typeof List>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <List {...args} />,
  args: {
    ordered: true,
    children: (
      <>
        <li>A</li>
        <li>B</li>
      </>
    ),
  },
}
