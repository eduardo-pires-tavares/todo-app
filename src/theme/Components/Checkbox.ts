export const Checkbox = {
  Checkbox: {
    baseStyle: {
      control: {
        bg: 'transparent',
        borderColor: 'yellow.300',
        _checked: {
          color: 'yellow.300',
          bg: 'transparent',
          borderColor: 'yellow.300'
        },
        _focus: {
          boxShadow: 'none'
        }
      }
    },
    sizes: {
      md: {
        control: { w: '14px', h: '14px' },

        icon: { fontSize: '0.525rem' }
      }
    },
    defaultProps: {
      colorScheme: 'transparent'
    }
  }
};
