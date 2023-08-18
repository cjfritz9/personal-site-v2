import React from 'react';
import { Container, Flex, Stack } from '@chakra-ui/react';
import Intro from './Intro';
import Codle from './Codle';
import Backsplash from '../../Shared/Backsplash';

const HomePage: React.FC = () => {
  return (
    <Container variant='page'>
      <Stack pos='relative' h='100%' justifyContent='center'>
        <Flex gap='8rem'>
          <Intro />
          <Codle />
        </Flex>
      </Stack>
      <Backsplash />
    </Container>
  );
};

export default HomePage;
