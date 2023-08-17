import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  userSelect: 'none',
  color: 'Primary.black',
  fontSize: '62px',
  _dark: {
    color: 'Secondary.white'
  }
});

const subHeadline = defineStyle({
  fontSize: '32px'
});

const headingConfig = defineStyleConfig({
  baseStyle,
  defaultProps: {
    size: ''
  },
  variants: {
    subHeadline
  }
});

export default headingConfig;
