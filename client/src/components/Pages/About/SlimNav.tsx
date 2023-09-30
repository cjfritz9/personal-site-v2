import React, { useContext, useEffect, useState } from 'react';
import { Container, Icon, Stack, Tooltip } from '@chakra-ui/react';
import { NavIconProps } from '../../../@types/props';
import navItems from './data/directories';
import { SiteContext } from '../../../context/Site.context';
import { SiteInterface } from '../../../@types/context';
import { Directories } from '../../../@types/about';

const SlimNav: React.FC = () => {
  const { location, navigate, setCurrentDirectory } = useContext(
    SiteContext
  ) as SiteInterface;
  const [activeIndex, setActiveIndex] = useState(0);
  const directories: Directories[] = ['career', 'personal', 'hobbies'];

  const clickHandler = (index: number) => {
    setActiveIndex(index);
    setCurrentDirectory(directories[index]);
    navigate(`/about?=${directories[index]}`)
  };

  useEffect(() => {
    if (location.search.length < 1) {
      setActiveIndex(0);
    } else {
      const tabIndex = location.search.includes('career')
        ? 0
        : location.search.includes('personal')
        ? 1
        : 2;
      setActiveIndex(tabIndex);
      setCurrentDirectory(directories[tabIndex]);
    }
  }, [location.search]);

  return (
    <Container variant='slimNav' as={Stack} flexDir={['row', 'column']}>
      {navItems.map((item, i) => (
        <NavIcon
          key={i}
          isActive={activeIndex === i}
          onClick={() => clickHandler(i)}
          baseIcon={item.baseIcon}
          hoveredIcon={item.hoveredIcon}
          tooltip={item.tooltip}
        />
      ))}
    </Container>
  );
};

const NavIcon: React.FC<NavIconProps> = ({
  baseIcon,
  hoveredIcon,
  tooltip,
  isActive,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tooltip
      label={tooltip}
      placement='right-start'
      shouldWrapChildren
      openDelay={500}
    >
      <Icon
        as={isHovered ? hoveredIcon : baseIcon}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          color: isActive ? '#B9C4CF' : ''
        }}
        onClick={onClick}
      />
    </Tooltip>
  );
};

export default SlimNav;
