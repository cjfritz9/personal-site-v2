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
  px: '1.5rem',
  py: 0,
  display: 'flex',
  alignItems: 'center',
  borderTop: '1px solid',
  borderTopColor: 'Lines'
});

const header = defineStyle({
  h: '56px',
  minW: '100%',
  px: '1.5rem',
  py: 0,
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

const suggestions = defineStyle({
  pos: 'fixed',
  bottom: '48px',
  h: 'fit-content',
  w: [
    '100%',
    '100%',
    'calc(100% - 340px)',
    'calc(100% - 340px)',
    'calc(100% - 360px)'
  ],
  maxW: '100dvw',
  m: 0,
  px: '.5rem',
  ml: ['-90px', '-204px', '-24px'],
  bg: 'Primary.black',
  color: 'Secondary.slate',
  zIndex: 2
});

const containerConfig = defineStyleConfig({
  baseStyle,
  defaultProps: {
    size: ''
  },
  variants: {
    footer,
    header,
    page,
    suggestions
  }
});

export default containerConfig;
