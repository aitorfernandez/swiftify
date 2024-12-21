import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '.'

const meta = {
  title: 'ui/Icon',
  component: Icon,
  parameters: {
    controls: {
      exclude: ['icon'],
    },
  },
  args: {
    icon: ['fa', 'user'],
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Icon {...args} />,
}

export const CustomColor: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    c: 'tomato',
  },
}

export const CustomFontSize: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    fs: '32px',
  },
}
