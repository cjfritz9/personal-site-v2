import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {
    // this will style the MenuButton component
    // _active: { bgColor: '' },
    color: 'Secondary.slate',
    fontSize: '24px',
    zIndex: 1
  },
  list: {
    py: 0,
    borderRadius: 0,
    border: 'none',
    bg: 'Primary.dkSlate'
  },
  item: {
    px: '1.5rem',
    py: '1rem',
    color: 'Secondary.white',
    borderBottom: '1px solid',
    borderBottomColor: 'Lines',
    bg: 'Primary.dkSlate',
    fontSize: '16px',
    _focus: {
      bg: 'Primary.dkBlack'
    }
  },
  groupTitle: {
    // this will style the text defined by the title prop
    // in the MenuGroup and MenuOptionGroup components
  },
  command: {
    // this will style the text defined by the command
    // prop in the MenuItem and MenuItemOption components
  },
  divider: {
    // this will style the MenuDivider component
  }
});
// export the base styles in the component theme
const menuConfig = defineMultiStyleConfig({ baseStyle });

export default menuConfig;
