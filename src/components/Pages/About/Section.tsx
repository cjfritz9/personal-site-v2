import React, { useState } from 'react';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { RiArrowDownSFill, RiArrowRightSFill } from 'react-icons/ri';
import { SectionProps } from '../../../@types/props';

const Section: React.FC<SectionProps> = ({ title, isFirst = false }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Flex
      w='100%'
      py={0}
      mt={isFirst ? '-6px' : '0'}
      borderTop={isFirst ? 'none' : '1px solid'}
      borderBottom='1px solid'
      gap='.5rem'
      alignItems='center'
      onClick={() => setIsExpanded((prev) => !prev)}
    >
      <Icon
        as={isExpanded ? RiArrowDownSFill : RiArrowRightSFill}
        fontSize='20px'
        style={{ color: 'white' }}
      />
      <Text variant='label' color='Secondary.white !important'>
        {title}
      </Text>
    </Flex>
  );
};

export default Section;
