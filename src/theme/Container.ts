import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  m: 0,
  p: '1rem',
  color: 'Primary.black',
  bgColor: 'transparent',
  _dark: {
    color: 'Secondary.slate'
  }
});

const footer = defineStyle({
  h: '48px',
  minW: '100%',
  p: 0,
  px: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  borderTop: '1px solid',
  borderTopColor: 'Lines'
});

const header = defineStyle({
  h: '56px',
  minW: '100%',
  p: 0,
  px: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid',
  borderBottomColor: 'Lines'
});

const page = defineStyle({
  h: 'calc(100dvh - 104px)',
  minW: '100dvw',
  p: 0,
  display: 'flex',
  flexDir: 'column',
  alignItems: 'center'
});

const containerConfig = defineStyleConfig({
  baseStyle,
  defaultProps: {
    size: ''
  },
  variants: {
    footer,
    header,
    page
  }
});

export default containerConfig;
