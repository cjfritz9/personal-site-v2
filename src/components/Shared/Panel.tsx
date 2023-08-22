import React from 'react';
import { Flex } from '@chakra-ui/react';

import { PanelProps } from '../../@types/props';

const Panel: React.FC<PanelProps> = ({ content, variant, width, styles }) => {
  return (
    <Flex
      display={[variant === 'left' || 'right' ? 'flex' : 'none', 'flex']}
      h='100%'
      w={width ? width : 'fit-content'}
      paddingLeft={variant === 'right' ? '1.5rem' : ''}
      paddingRight={variant === 'left' ? '1.5rem' : ''}
      px={variant === 'center' ? '1.5rem' : ''}
      alignItems='center'
      borderLeft={variant === 'right' ? '1px solid' : 'none'}
      borderRight={variant === 'left' ? '1px solid' : 'none'}
      borderColor='Lines'
      gap='.75rem'
      {...styles}
    >
      {content}
    </Flex>
  );
};

export default Panel;
