import React from 'react';
import { Container, Icon, Text } from '@chakra-ui/react';
import { ItemProps } from '../../../@types/props';

const Item: React.FC<ItemProps> = ({ icon, iconColor, name }) => {
  return (
    <Container
      variant='item'
    >
      <Icon as={icon} style={{ fontSize: '16px', color: iconColor }} />
      <Text variant='snippet'>{name}</Text>
    </Container>
  );
};

export default Item;
