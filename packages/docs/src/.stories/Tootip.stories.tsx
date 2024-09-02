import type { Meta, StoryObj } from '@storybook/react'
import { Box, Tooltip } from '@samuel-ignite-ui/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2', padding: '150px'}}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta

export const Primary: StoryObj = {
  args: {
    children: '26',
    content: '26 de Outubro - Disponível'
  }
}