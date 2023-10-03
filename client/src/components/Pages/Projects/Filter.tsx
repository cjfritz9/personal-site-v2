import React, { useLayoutEffect, useState } from 'react';
import { Container, Icon, Stack, Text, useMediaQuery } from '@chakra-ui/react';
import { filterItems } from './data/filterItems';
import FilterItem from './FilterItem';
import { scrollbarStyles } from '../../../theme/BrandColors';
import { RiArrowDownSFill, RiArrowRightSFill } from 'react-icons/ri';

const Filter: React.FC = () => {
  const [isSmallerThan992] = useMediaQuery(['(max-width: 992px)']);
  const [isExpanded, setIsExpanded] = useState(true);

  useLayoutEffect(() => {
    if (isSmallerThan992) {
      setIsExpanded(false);
    }
  }, [isSmallerThan992]);

  return (
    <Stack
      h='100%'
      w={['100%', '100%', '409px']}
      borderRight='1px solid'
      borderColor='Lines'
    >
      <Container
        variant='section'
        mt='-1px'
        pl='1rem'
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <Icon
          as={isExpanded ? RiArrowDownSFill : RiArrowRightSFill}
          fontSize='20px'
          style={{ color: 'white' }}
        />
        <Text variant='label' color='Secondary.white !important'>
          filters
        </Text>
      </Container>
      {isExpanded && (
        <Stack
          py='1rem'
          mt='-8px'
          mr='-1px'
          alignItems='flex-start'
          h={['240px', '240px', '100%']}
          overflowY='auto'
          css={scrollbarStyles}
        >
          {filterItems.map((item, i) => (
            <FilterItem key={i} item={item} />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default Filter;
