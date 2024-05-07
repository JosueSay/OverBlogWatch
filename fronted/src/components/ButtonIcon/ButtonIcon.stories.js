import ButtonIcon from './ButtonIcon'
import { fn } from '@storybook/test'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export default {
  component: ButtonIcon
}

export const Default = {
  args: {
    onClick: fn(),
    icon: faEyeSlash
  }
}
