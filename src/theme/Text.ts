import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  color: 'Secondary.white',
  fontSize: '18px'
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
