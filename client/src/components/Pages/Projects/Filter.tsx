import React from 'react';
import { Container, Stack, Text } from '@chakra-ui/react';
import { filterItems } from './data/filterItems';
import FilterItem from './FilterItem';

const Filter: React.FC = () => {
  return (
    <Stack h='100%' borderRight='1px solid' borderColor='Lines'>
      <Container variant='section' w='335px' mt='-1px' pl='1rem'>
        <Text variant='label' color='Secondary.white !important'>
          filters
        </Text>
      </Container>
      <Stack h='100%' alignItems='flex-start'>
        {filterItems.map((item, i) => (
          <FilterItem key={i} item={item} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Filter;
