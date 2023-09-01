import React, { useContext } from 'react';
import { Box, Container, Icon, Text, useToast } from '@chakra-ui/react';
import { ItemProps } from '../../../@types/props';
import { SiteContext } from '../../../context/Site.context';
import { SiteInterface } from '../../../@types/context';

const Item: React.FC<ItemProps> = ({ icon, iconColor, name }) => {
  const { setCurrentDisplayContent } = useContext(SiteContext) as SiteInterface;
  const toast = useToast();

  const handleClick = (name: string) => {
    if (name === 'dev.cjfritz@gmail.com' || name === '(785) 217-7125') {
      navigator.clipboard.writeText(name);
      if (!toast.isActive(name)) {
        toast({
          id: name,
          title: 'Copied to clipboard',
          description: name,
          position: 'bottom-left',
          duration: 5000
        });
      }
    } else {
      setCurrentDisplayContent(name);
    }
  };
  return (
    <Container variant='item' onClick={() => handleClick(name)}>
      <Icon as={icon} style={{ fontSize: '16px', color: iconColor }} />
      <Text variant='snippet'>{name}</Text>
    </Container>
  );
};

export default Item;
