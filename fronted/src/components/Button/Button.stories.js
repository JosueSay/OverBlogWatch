import Button from './Button'
import { fn } from '@storybook/test'

export default {
  component: Button
}

export const Default = {
  args: {
    title: 'Click Me!',
    onClick: fn()
  }
}
