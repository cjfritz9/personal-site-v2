import React, { useContext } from 'react';
import { Container, Icon, Text } from '@chakra-ui/react';
import { ItemProps } from '../../../@types/props';
import { SiteContext } from '../../../context/Site.context';
import { SiteInterface } from '../../../@types/context';

const Item: React.FC<ItemProps> = ({ icon, iconColor, name }) => {
  const { setCurrentDisplayContent } = useContext(SiteContext) as SiteInterface;
  return (
    <Container variant='item' onClick={() => setCurrentDisplayContent(name)}>
      <Icon as={icon} style={{ fontSize: '16px', color: iconColor }} />
      <Text variant='snippet'>{name}</Text>
    </Container>
  );
};

export default Item;
