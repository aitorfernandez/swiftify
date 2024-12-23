import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '.'

const meta = {
  title: 'ui/Card',
  component: Card,
  argTypes: {
    bg: { control: 'color' },
    radii: { control: 'text' },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Card {...args}>Card content</Card>,
}

export const CustomCard: Story = {
  render: (args) => <Card {...args}>Card content</Card>,
  args: {
    bg: '#dcdcdc',
    radii: '12px',
  },
}
