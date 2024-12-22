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
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    icon: ['fa', 'user'],
  },
}

export const CustomColor: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    c: 'tomato',
    icon: ['fa', 'user'],
  },
}

export const CustomFontSize: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    fs: '32px',
    icon: ['fa', 'user'],
  },
}

export const Gauge: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    icon: ['fa', 'gauge'],
  },
}

export const DiamondTurnRight: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    icon: ['fa', 'diamond-turn-right'],
  },
}

export const Scroll: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    icon: ['fa', 'scroll'],
  },
}
