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

const terminalPrimary = defineStyle({
  w: ['128px','128px'],
  pr: '.5rem',
  color: 'Accent.rose !important'
});

const terminalSearch = defineStyle({
  w: ['128px','128px'],
  pr: '.5rem',
  color: 'Accent.emerald !important'
});

const textConfig = defineStyleConfig({
  baseStyle,
  defaultProps: {
    size: ''
  },
  variants: {
    label,
    snippet,
    terminalPrimary,
    terminalSearch
  }
});

export default textConfig;
