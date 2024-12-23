import type { Meta, StoryObj } from '@storybook/react'

import { Heading } from '.'

const meta = {
  title: 'ui/Heading',
  component: Heading,
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Heading {...args} />,
  args: {
    children: <>Header content</>,
  },
}

export const LevelTwo: Story = {
  render: (args) => <Heading {...args} />,
  args: {
    level: 2,
    children: <>Header content</>,
  },
}
