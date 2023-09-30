import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    _focus: {
      boxShadow: 'none !important'
    },
    _placeholder: {
      fontWeight: 'bold'
    },
    caretColor: 'transparent',
    px: ['4px', null, '8px'],
    border: 'none !important',
    borderWidth: '0 !important',
    color: 'Accent.purple'
  }
});

const codle = definePartsStyle({
  field: {
    w: ['48px', null, '56px'],
    h: ['48px', null, '56px'],
    py: '8px',
    color: 'Secondary.white',
    fontSize: ['40px', null, '48px'],
    textAlign: 'center',
    bgColor: 'Primary.dkGray',
    transition: 'all .75s ease',
    _readOnly: true
  }
});

const contactForm = definePartsStyle({
  field: {
    _focus: {
      borderColor: 'Secondary.slate'
    },
    h: '42px',
    w: '100%',
    color: 'Secondary.white',
    bgColor: 'Primary.dkGray',
    border: '1px solid',
    borderWidth: '1px !important',
    borderColor: 'Lines',
    borderRadius: '8px'
  }
});

const inputConfig = defineMultiStyleConfig({
  baseStyle,
  variants: { codle, contactForm }
});

export default inputConfig;
