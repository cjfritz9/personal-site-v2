import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  color: 'Primary.black',
  fontSize: ['14px', '16px', '16px', '16px', '18px'],
  _dark: {
    color: 'Secondary.slate'
  }
});

const label = defineStyle({
  fontSize: ['12px', '14px', '14px', '14px', '16px']
});

const snippet = defineStyle({
  fontSize: ['12px', '12px', '12px', '12px', '14px']
});

const textConfig = defineStyleConfig({
  baseStyle,
  defaultProps: {
    size: ''
  },
  variants: {
    label,
    snippet
  }
});

export default textConfig;
