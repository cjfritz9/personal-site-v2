import {
  RiGamepadFill,
  RiGamepadLine,
  RiTerminalBoxFill,
  RiTerminalBoxLine,
  RiUserFill,
  RiUserLine
} from 'react-icons/ri';

const navItems = [
  {
    baseIcon: RiTerminalBoxLine,
    hoveredIcon: RiTerminalBoxFill,
    tooltip: 'career'
  },
  {
    baseIcon: RiUserLine,
    hoveredIcon: RiUserFill,
    tooltip: 'personal'
  },
  {
    baseIcon: RiGamepadLine,
    hoveredIcon: RiGamepadFill,
    tooltip: 'hobbies'
  }
];

export default navItems;
