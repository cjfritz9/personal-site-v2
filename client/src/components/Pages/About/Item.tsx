import React, { useContext, useState } from 'react';
import {
  Box,
  Container,
  Icon,
  Stack,
  Text,
  ToastId,
  useToast
} from '@chakra-ui/react';
import { ItemProps } from '../../../@types/props';
import { SiteContext } from '../../../context/Site.context';
import { SiteInterface } from '../../../@types/context';
import { RiClipboardLine } from 'react-icons/ri';

const Item: React.FC<ItemProps> = ({ icon, iconColor, name }) => {
  const { setCurrentDisplayContent } = useContext(SiteContext) as SiteInterface;
  const toast = useToast();

  const handleClick = (name: string) => {
    if (name === 'dev.cjfritz@gmail.com' || name === '(785) 217-7125') {
      navigator.clipboard.writeText(name);
      console.log(name, toast.isActive(name));
      if (!toast.isActive(name)) {
        toast.closeAll();
        toast({
          id: name,
          title: 'Copied to clipboard',
          icon: <RiClipboardLine size='24px' />,
          description: name,
          // status: 'success',
          position: 'bottom-left',
          duration: 4000
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
