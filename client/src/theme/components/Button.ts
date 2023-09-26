import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const appStatus = defineStyle({
  _hover: {
    background: 'Secondary.slate',
    borderColor: 'Secondary.slate',
    color: 'Primary.dkSlate'
  },
  fontWeight: 400,
  fontSize: '14px',
  flexGrow: 1,
  border: '1px solid',
  borderColor: 'Primary.black'
});

const buttonConfig = defineStyleConfig({
  variants: {
    appStatus
  }
});

export default buttonConfig;
