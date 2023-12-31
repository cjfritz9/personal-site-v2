import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  minW: 0,
  maxW: '100dvw',
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
  borderTopColor: 'Lines',
  zIndex: 10
});

const header = defineStyle({
  h: '56px',
  minW: '100%',
  px: '1.5rem',
  py: 0,
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid',
  borderBottomColor: 'Lines',
  zIndex: 10
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
  bottom: '47px',
  h: 'fit-content',
  w: [
    '100%',
    '100%',
    'calc(100% - 340px)',
    'calc(100% - 340px)',
    'calc(100% - 363px)'
  ],
  maxW: '100dvw',
  m: 0,
  px: '.5rem',
  ml: ['-90px', '-204px', '-24px'],
  bg: 'Primary.black',
  color: 'Secondary.slate',
  zIndex: 8
});

const slimNav = defineStyle({
  pos: 'sticky',
  top: '0px',
  h: ['fit-content', '100%'],
  minW: '72px',
  w: ['100%', '72px'],
  m: 0,
  p: 0,
  py: '1rem',
  gap: ['4rem', '2rem'],
  justifyContent: ['center', 'start'],
  alignItems: 'center',
  borderBottom: ['1px solid', 'none'],
  borderRight: '1px solid',
  borderColor: 'Lines',
  bgColor: 'Primary.dkSlate'
});

const directory = defineStyle({
  h: ['fit-content', 'fit-content', '100%'],
  w: ['100%', '100%', '12.5rem', '13rem', '16.5rem'],
  minW: ['100%', '100%', '12.5rem', '13rem', '16.5rem'],
  m: 0,
  p: 0,
  alignItems: 'flex-start',
  borderRight: '1px solid',
  borderRightColor: 'Lines'
});

const section = defineStyle({
  display: 'flex',
  h: '42px',
  w: '100%',
  m: 0,
  p: '.5rem',
  cursor: 'pointer',
  userSelect: 'none',
  borderTop: '1px solid',
  borderBottom: '1px solid',
  borderColor: 'Lines',
  gap: '.5rem',
  alignItems: 'center'
});

const folder = defineStyle({
  display: 'flex',
  w: '100%',
  m: 0,
  p: 0,
  gap: '.5rem',
  cursor: 'pointer',
  userSelect: 'none',
  alignItems: 'center'
});

const item = defineStyle({
  display: 'flex',
  w: '100%',
  m: 0,
  p: 0,
  pl: '.75rem',
  gap: '.5rem',
  cursor: 'pointer',
  userSelect: 'none',
  alignItems: 'center'
});

const display = defineStyle({
  display: 'flex',
  flexGrow: 1,
  h: ['100%'],
  w: '100%',
  // minW: '100%',
  maxW: '',
  m: 0,
  p: 0,
  borderRight: '1px solid',
  borderColor: 'Lines'
});

const snippets = defineStyle({
  display: 'flex',
  h: '100%',
  flexGrow: 1,
  // w: '100%',
  maxW: '764px',
  m: 0,
  p: 0
});

const containerConfig = defineStyleConfig({
  baseStyle,
  defaultProps: {
    size: ''
  },
  variants: {
    directory,
    display,
    folder,
    footer,
    header,
    item,
    page,
    section,
    slimNav,
    snippets,
    suggestions
  }
});

export default containerConfig;
