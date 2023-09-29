import React, { useContext, useEffect } from 'react';
import { Container, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { FolderProps } from '../../../@types/props';
import {
  RiFolder3Fill,
  RiFolderOpenFill,
  RiGraduationCapFill
} from 'react-icons/ri';
import Item from './Item';
import { SiteContext } from '../../../context/Site.context';
import { SiteInterface } from '../../../@types/context';

const Folder: React.FC<FolderProps> = ({ folderColor, folderName, items }) => {
  const { location, currentDirectory, navigate } = useContext(
    SiteContext
  ) as SiteInterface;
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    const folder = location.search.includes('&')
      ? location.search.slice(0, location.search.indexOf('&'))
      : location.search;
    if (!isOpen) {
      navigate(`${location.pathname}${folder}&${folderName}`);
    } else {
      navigate(`${location.pathname}${folder}`);
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [currentDirectory]);

  useEffect(() => {
    if (location.search.includes(folderName)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [location.search]);

  return (
    <Stack px='1rem'>
      <Container variant='folder' onClick={handleClick}>
        <Icon
          as={isOpen ? RiFolderOpenFill : RiFolder3Fill}
          style={{ color: folderColor, fontSize: '20px' }}
        />
        <Text variant='label' color={isOpen ? 'white !important' : ''}>
          {folderName}
        </Text>
      </Container>
      {isOpen &&
        items.map((item, i) => (
          <Item
            key={i}
            icon={item.icon}
            name={item.name}
            iconColor={item.iconColor}
          />
        ))}
    </Stack>
  );
};

export default Folder;
