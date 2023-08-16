import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  userSelect: 'none',
  color: 'Secondary.white',
  fontSize: '62px'
});

const subHeadline = defineStyle({
  fontSize: '32px'
})

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
