import React from 'react';
import { Box, Center, Icon } from '@chakra-ui/react';
import { filterItems } from './data/filterItems';
import { TechBadgeProps } from '../../../@types/props';

const TechBadge: React.FC<TechBadgeProps> = ({ name }) => {
  const { icon } = filterItems.find((n) => n.name.toLowerCase() === name)!;

  return (
    <Box h='1.75rem' w='1.75rem' bg='#86E1F9' borderRadius='4px'>
      <Center h='100%'>
        <Icon as={icon} h='18px' w='18px' fill='black' />
      </Center>
    </Box>
  );
};

export default TechBadge;
