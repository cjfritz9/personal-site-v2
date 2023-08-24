import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  cursor: 'pointer',
  fontSize: '24px',
  color: 'Secondary.slate'
});

const iconConfig = defineStyleConfig({
  baseStyle
});

export default iconConfig;
