import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  fontSize: '14px',
  bgColor: 'Primary.black',
  color: 'Secondary.white'
});

const tooltipConfig = defineStyleConfig({
  baseStyle
});

export default tooltipConfig;
