import type { Meta, StoryObj } from '@storybook/react'

import { Box } from '.'

const meta = {
  title: 'ui/Box',
  component: Box,
  argTypes: {
    c: { control: 'color' },
    ff: { control: 'text' },
  },
} satisfies Meta<typeof Box>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Box {...args}>Defaul box content</Box>,
  parameters: {
    controls: {
      exclude: ['c', 'ff'],
    },
  },
}

export const CustomColor: Story = {
  render: (args) => <Box {...args}>This box has a custom color</Box>,
  args: {
    c: 'tomato',
    ff: 'inherit',
  },
}

export const CustomFontFamily: Story = {
  render: (args) => <Box {...args}>This box has a custom font-family</Box>,
  args: {
    c: 'inherit',
    ff: 'Arial, sans-serif',
  },
}
