import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  userSelect: 'none',
  color: 'Primary.black',
  fontSize: ['40px', '48px', '48px', '48px', '62px'],
  _dark: {
    color: 'Secondary.white'
  }
});

const subHeadline = defineStyle({
  fontSize: ['18px', '24px', '24px', '24px', '32px']
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
