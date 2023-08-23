import React, { useState } from 'react';
import { Container, Icon, Stack, Text, Tooltip } from '@chakra-ui/react';
import {
  RiGamepadFill,
  RiGamepadLine,
  RiTerminalBoxFill,
  RiTerminalBoxLine,
  RiUserFill,
  RiUserLine
} from 'react-icons/ri';
import { NavIconProps } from '../../../@types/props';

const SlimNav: React.FC = () => {
  return (
    <Container variant='slimNav' as={Stack}>
      <NavIcon
        baseIcon={RiTerminalBoxFill}
        hoveredIcon={RiTerminalBoxLine}
        tooltip='career'
      />
      <NavIcon
        baseIcon={RiUserFill}
        hoveredIcon={RiUserLine}
        tooltip='personal'
      />
      <NavIcon
        baseIcon={RiGamepadFill}
        hoveredIcon={RiGamepadLine}
        tooltip='hobbies'
      />
    </Container>
  );
};

const NavIcon: React.FC<NavIconProps> = ({
  baseIcon,
  hoveredIcon,
  tooltip
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tooltip label={tooltip} placement='right-start' shouldWrapChildren openDelay={500}>
      <Icon
        as={isHovered ? hoveredIcon : baseIcon}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </Tooltip>
  );
};

export default SlimNav;
