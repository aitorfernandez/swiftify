import type { Meta, StoryObj } from '@storybook/react'

import { Flex } from '.'

const meta = {
  title: 'ui/Flex',
  component: Flex,
  argTypes: {
    c: { control: 'color' },
    ff: { control: 'text' },
  },
} satisfies Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Flex {...args}>Defaul flex content</Flex>,
  args: {
    c: 'tomato',
    ff: 'Arial, sans-serif',
  },
}
