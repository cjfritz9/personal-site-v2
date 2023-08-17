import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyle = definePartsStyle({
  root: {
    h: '100%'
  },
  tablist: {
    h: '100%',
    borderBottomWidth: '0px !important'
  },
  tab: {
    _selected: {
      mb: '-1px',
      color: 'Secondary.white',
      borderBottom: '2px solid !important',
      borderBottomColor: 'Accent.orange !important'
    },
    borderBottomWidth: '0px !important',
    borderRight: '1px solid',
    borderRightColor: 'Lines !important'
  }
});

const tabsConfig = defineMultiStyleConfig({ baseStyle });

export default tabsConfig;
