import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import { Link } from '.'

const meta = {
  title: 'ui/Link',
  component: Link,
  argTypes: {
    to: {
      control: 'text',
      description: 'Path for internal navigation (used with react-router-dom)',
      table: {
        category: 'Navigation',
      },
    },
    // ...
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Link {...args} />,
  args: {
    to: '/',
    children: 'Default link content',
  },
}

export const ExternalLink: Story = {
  render: (args) => <Link {...args} />,
  args: {
    href: 'https://reactjs.org',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'External link content',
  },
}
