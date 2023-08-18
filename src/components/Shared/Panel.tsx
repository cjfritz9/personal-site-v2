import React from 'react';
import { Flex } from '@chakra-ui/react';

import { PanelProps } from '../../@types/props';

const Panel: React.FC<PanelProps> = ({ content, variant, width }) => {
  return (
    <Flex
      h='100%'
      w={width ? width : 'fit-content'}
      alignItems='center'
      px='1.5rem'
      borderLeft={variant === 'right' ? '1px solid' : 'none'}
      borderRight={variant === 'left' ? '1px solid' : 'none'}
      borderColor='Lines'
      gap='.75rem'
    >
      {content}
    </Flex>
  );
};

export default Panel;
