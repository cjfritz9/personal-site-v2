import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  color: 'Primary.black',
  fontSize: '18px',
  _dark: {
    color: 'Secondary.slate'
  }
});

const label = defineStyle({
  fontSize: '16px'
});

const snippet = defineStyle({
  fontsize: '14px'
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
