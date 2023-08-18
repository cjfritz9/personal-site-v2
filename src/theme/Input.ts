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
    px: '8px',
    border: 'none !important',
    borderWidth: '0 !important',
    color: 'Accent.purple'
  }
});

const codle = definePartsStyle({
  field: {
    w: '56px',
    h: '56px',
    py: '8px',
    color: 'Secondary.white',
    fontSize: '48px',
    textAlign: 'center',
    bgColor: 'Primary.dkGray'
  }
});

const inputConfig = defineMultiStyleConfig({ baseStyle, variants: { codle } });

export default inputConfig;
