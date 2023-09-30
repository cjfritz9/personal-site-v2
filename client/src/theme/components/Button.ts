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

const cardPrimary = defineStyle({
  _active: {
    transform: 'scale(.98)'
  },
  _hover: {
    filter: 'brightness(1.1)'
  },
  fontWeight: 400,
  color: 'Secondary.white',
  bg: 'Secondary.slate'
})

const cardSecondary = defineStyle({
  _active: {
    transform: 'scale(.98)'
  },
  _hover: {
    filter: 'brightness(1.1)'
  },
  fontWeight: 400,
  color: 'Secondary.white',
  bg: 'Lines'
})

const buttonConfig = defineStyleConfig({
  variants: {
    appStatus,
    cardPrimary,
    cardSecondary
  }
});

export default buttonConfig;
